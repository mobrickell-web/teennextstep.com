"use client";

import React from "react";
import { Search, SlidersHorizontal, X, ChevronRight } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { FilterTag } from "@/lib/types/dashboard/departments";
import { Input } from "./input";
import { Button } from "./button";

interface PageHeaderProps {
  title: string;
  actionLabel: string;
  onActionClick: () => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onFilterClick: () => void;
  filterTags: FilterTag[];
  onRemoveTag: (id: string) => void;
}

export function PageHeader({
  title,
  actionLabel,
  onActionClick,
  searchTerm,
  onSearchChange,
  onFilterClick,
  filterTags,
  onRemoveTag,
}: PageHeaderProps) {
  return (
    <div className="w-full flex flex-col">
      {/* Top Breadcrumb row */}
      <div className="flex items-center justify-between w-full mb-6 px-1">
        <div className="flex items-center gap-1.5">
          <Typography variant="h4" className="text-grey-text ">
            Identity
          </Typography>
          <ChevronRight className="w-4 h-4 text-grey-text" />
          <Typography variant="h5" className="text-text font-display ">
            {title}
          </Typography>
        </div>
       

        <Button
          type="submit"
          onClick={onActionClick}
          className="h-10"
        >
          <Typography variant="button-semibold">{actionLabel}</Typography>
        </Button>
      </div>

      {/* Row 1: Title and Search Bar (Matches Image 2 exactly) */}
      <div className="bg-white border-t border-x border-grey-card-stroke rounded-t-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Typography
          variant="button-semibold"
          
        >
          {title}
        </Typography>

    
        <div className="relative flex items-center w-full sm:w-[320px] md:w-[380px] lg:w-[420px] transition-all">
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search"
            className="w-full h-10 px-4 pr-11 bg-white placeholder:text-slate-400 text-sm border border-slate-200 rounded-[10px] text-sm focus-visible:ring-slate-300 shadow-2xs transition-all"
          />
          
          <div className="absolute right-3.5 p-1 flex items-center justify-center pointer-events-none">
            <Search className="w-[17px] h-[17px] text-slate-400 stroke-[1.75]" />
          </div>
        </div>
      </div>

    
      <div className="bg-white border-x border-y border-grey-card-stroke px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 min-h-[56px]">
      {/* Left Side: Active Filter Badges */}
      <div className="flex flex-wrap gap-2 items-center">
      {filterTags.length > 0 &&
  filterTags.map((tag) => (
    <div
      key={tag.id}
      className="flex items-center gap-2 border border-primary-100/30 rounded-[12px] px-3.5 py-1.5 bg-white text-primary animate-in fade-in zoom-in-95 duration-150 shadow-2xs"
    >
      <Typography
        as="span"
        variant="button-medium"
        className="text-primary tracking-wide text-[14px]"
      >
        {tag.label}
      </Typography>
      <button
        type="button"
        onClick={() => onRemoveTag(tag.id)}
        className="hover:opacity-70 focus:outline-none cursor-pointer text-primary p-0.5 rounded-full hover:bg-primary/5 transition-colors"
      >
        <X className="w-3 h-3 text-primary" strokeWidth={2.5} />
      </button>
    </div>
  ))
}
      </div>

      {/* Right Side: Action Button */}
      <button
        onClick={onFilterClick}
        className="flex items-center justify-center gap-2 border  border-slate-200  rounded-[8px] px-4 h-9 hover:bg-slate-50 transition-colors cursor-pointer bg-white whitespace-nowrap w-full sm:w-auto shadow-2xs"
      >
        <SlidersHorizontal
          className="w-3.5 h-3.5"
          strokeWidth={2}
        />
        <Typography
          as="span"
          variant="button-semibold"
       
        >
          More Filters
        </Typography>
      </button>
    </div>
    </div>
  );
}
