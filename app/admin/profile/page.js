"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Save, Upload, X } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function EditProfile() {
  const router = useRouter();
  const { toast } = useToast();

  const [profile, setProfile] = useState({
    name: "",
    role: "",
    bio: "",
    profile_image: "",
    imageFile: null,
  });

  const [previewImage, setPreviewImage] = useState("/api/placeholder/150/150");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { data, error } = await supabase
        .from("user_profiles")
        .select()
        .eq("id", user.id)
        .single();

      if (error) {
        toast({
          title: "Error",
          description: "Failed to fetch profile",
          variant: "destructive",
        });
      } else {
        setProfile({
          name: data.name || "",
          role: data.role || "",
          bio: data.bio || "",
          profile_image: data.profile_image || "",
          imageFile: null,
        });

        if (data.profile_image) {
          const url = data.profile_image.startsWith("http")
            ? data.profile_image
            : supabase.storage
                .from("profile-images")
                .getPublicUrl(data.profile_image).data.publicUrl;
          setPreviewImage(url);
        }
      }

      setLoading(false);
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    if (file.size > 2 * 1024 * 1024) {
      toast({ title: 'Image too large', description: 'Max 2MB allowed', variant: 'destructive' });
      return;
    }
  
    setProfile({ ...profile, imageFile: file });
    setPreviewImage(URL.createObjectURL(file));
  };
  

  const handleRemoveImage = () => {
    setProfile({ ...profile, imageFile: null, profile_image: null });
    setPreviewImage("/api/placeholder/150/150");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
  
    // Retrieve the authenticated user.
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
  
    // Prepare the update data with fields from the profile.
    const updateData = {
      name: profile.name,
      role: profile.role,
      bio: profile.bio,
    };
  
    // If a new image file is selected, upload it.
    if (profile.imageFile) {
      const fileExt = profile.imageFile.name.split('.').pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
  
      // Upload the file to Supabase Storage.
      const { error: uploadError } = await supabase.storage
        .from('profile-images')
        .upload(fileName, profile.imageFile, { upsert: true });
  
      if (uploadError) {
        toast({
          title: 'Upload failed',
          description: uploadError.message,
          variant: 'destructive'
        });
        setSaving(false);
        return;
      }
  
      // Retrieve the public URL of the uploaded image.
      const { data: publicUrlData, error: urlError } = supabase.storage
        .from('profile-images')
        .getPublicUrl(fileName);
      
      if (urlError) {
        toast({
          title: 'URL error',
          description: urlError.message,
          variant: 'destructive'
        });
        setSaving(false);
        return;
      }
  
      // Update the profile_image field with the public URL.
      updateData.profile_image = publicUrlData.publicUrl;
    } else if (!profile.profile_image) {
      // If no image is set, explicitly store null.
      updateData.profile_image = null;
    }
  
    // Update the profile in the Supabase database.
    const { error } = await supabase
      .from('user_profiles')
      .update(updateData)
      .eq('id', user.id);
  
    if (error) {
      toast({
        title: 'Update failed',
        description: error.message,
        variant: 'destructive'
      });
    } else {
      toast({
        title: 'Profile updated',
        variant: 'success'
      });
    }
  
    setSaving(false);
  };
  

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-6 h-6 animate-spin text-emerald-600" />
      </div>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-lg shadow-md"
        >
          {/* Profile Picture */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <Image
                src={previewImage}
                alt="Profile"
                width={96}
                height={96}
                className="rounded-full border"
              />
              {(profile.imageFile || profile.profile_image) && (
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-0 right-0 p-1 bg-red-500 rounded-full text-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>
            <div>
              <label className="inline-block cursor-pointer text-emerald-600 hover:underline">
                <Upload className="inline-block mr-1" size={16} />
                Change Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              <p className="text-sm text-gray-500">Max size: 2MB</p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <input
                type="text"
                name="role"
                value={profile.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Your role"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Short bio"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md flex items-center gap-2"
            >
              {saving && <Loader2 className="w-4 h-4 animate-spin" />}
              Save
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
