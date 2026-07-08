"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LayoutDashboard, FileText, UploadCloud, ChevronRight } from "lucide-react";
import SingleJobForm from "./SingleJobForm";
import BulkImportTool from "./BulkImportTool";

export default function ImportJobsPage() {
  const [activeTab, setActiveTab] = useState<"single" | "bulk">("single");

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50/30 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.35] pointer-events-none -z-10" />
      
      {/* Glowing Blur Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-200/25 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-violet-200/25 blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-6xl mx-auto space-y-8 relative">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-xs font-semibold text-zinc-400 space-x-2.5 uppercase tracking-wider">
          <Link href="/admin/manage" className="hover:text-indigo-600 transition-colors flex items-center gap-1.5">
            <LayoutDashboard className="w-3.5 h-3.5" />
            Dashboard
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-300" />
          <span className="text-zinc-700">Add Jobs</span>
        </nav>

        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 rounded-3xl border border-zinc-200/85 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-2xl text-white shadow-lg shadow-indigo-600/20">
              <UploadCloud className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-zinc-900">Add New Jobs</h1>
              <p className="text-xs font-medium text-zinc-500 mt-0.5">Select single entry or mass JSON importing.</p>
            </div>
          </div>
          
          <div className="flex bg-zinc-150/60 p-1.5 rounded-2xl border border-zinc-200/50">
            <button
              onClick={() => setActiveTab("single")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-bold transition-all duration-300 ${
                activeTab === "single" 
                  ? "bg-white text-indigo-600 shadow-md shadow-zinc-250/20" 
                  : "text-zinc-500 hover:text-zinc-700 hover:bg-white/40"
              }`}
            >
              <FileText className="w-4 h-4" />
              Single Job Form
            </button>
            <button
              onClick={() => setActiveTab("bulk")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-bold transition-all duration-300 ${
                activeTab === "bulk" 
                  ? "bg-white text-indigo-600 shadow-md shadow-zinc-250/20" 
                  : "text-zinc-500 hover:text-zinc-700 hover:bg-white/40"
              }`}
            >
              <UploadCloud className="w-4 h-4" />
              Bulk Import Tool
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === "single" ? <SingleJobForm /> : <BulkImportTool />}
        </div>
        
      </div>
    </div>
  );
}
