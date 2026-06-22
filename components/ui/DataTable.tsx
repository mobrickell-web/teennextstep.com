

"use client";

import React, { useMemo } from "react";
import { MoreHorizontal } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { PaginationState } from "@/lib/types/dashboard/departments";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export interface Column<TData> {
  header: string|React.ReactNode;
  accessorKey: keyof TData | "actions" | "iconUrl";
  align?: "left" | "center" | "right";
  renderCell?: (row: TData) => React.ReactNode;
}

interface DataTableProps<TData> {
  columns: Column<TData>[];
  data: TData[];
  pagination: PaginationState;
  selectedIds: (string | number)[];
  onSelectedIdsChange: (ids: (string | number)[]) => void;
}

export function DataTable<TData extends { id: string | number }>({
  columns,
  data,
  pagination,
  selectedIds,
  onSelectedIdsChange,
}: DataTableProps<TData>) {
  const { currentPage, totalPages, onPageChange } = pagination;

  // Determine if all current page items are checked
  const isAllSelected = useMemo(() => {
    if (data.length === 0) return false;
    return data.every((item) => selectedIds.includes(item.id));
  }, [data, selectedIds]);

  
  const handleSelectAllToggle = () => {
    if (isAllSelected) {
      
      const currentPageIds = data.map((item) => item.id);
      onSelectedIdsChange(selectedIds.filter((id) => !currentPageIds.includes(id)));
    } else {
     
      const uniqueIds = new Set([...selectedIds, ...data.map((item) => item.id)]);
      onSelectedIdsChange(Array.from(uniqueIds));
    }
  };

  // Single row checkbox handler
  const handleRowSelectToggle = (id: string | number) => {
    if (selectedIds.includes(id)) {
      onSelectedIdsChange(selectedIds.filter((item) => item !== id));
    } else {
      onSelectedIdsChange([...selectedIds, id]);
    }
  };

  const renderPageItems = () => {
    const items = [];
    const maxVisible = 3;

    for (let i = 1; i <= Math.min(maxVisible, totalPages); i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            isActive={currentPage === i}
            onClick={() => onPageChange(i)}
            className={`cursor-pointer w-8 h-8 rounded-[6px] border border-grey-card-stroke font-semibold text-xs transition-colors ${
              currentPage === i
                ? "bg-primary text-white hover:bg-primary/90 hover:text-white"
                : "bg-white text-text hover:bg-bg-hover"
            }`}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (totalPages > maxVisible) {
      if (totalPages > maxVisible + 1) {
        items.push(
          <PaginationItem key="ellipsis">
            <PaginationEllipsis className="text-grey-text" />
          </PaginationItem>
        );
      }
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            isActive={currentPage === totalPages}
            onClick={() => onPageChange(totalPages)}
            className={`cursor-pointer w-8 h-8 rounded-[6px] border border-grey-card-stroke font-semibold text-xs transition-colors ${
              currentPage === totalPages
                ? "bg-primary text-white hover:bg-primary/90 hover:text-white"
                : "bg-white text-text hover:bg-bg-hover"
            }`}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <div className="bg-white border-x border-b border-grey-card-stroke rounded-b-xl shadow-xs overflow-hidden">
      <div className="w-full overflow-x-auto scrollbar-hide">
        <table className="w-full text-left border-collapse table-auto min-w-[850px]">
          <thead>
            <tr className="border-b border-grey-card-stroke bg-white text-grey-text">
              <th className="p-4 w-14 text-center align-middle">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={handleSelectAllToggle}
                  className="w-[18px] h-[18px] rounded border border-primary checked:border-primary accent-primary text-white cursor-pointer transition-all focus:ring-0 focus:ring-offset-0 appearance-none bg-white checked:bg-primary relative after:content-[''] after:absolute after:hidden checked:after:block after:left-[5px] after:top-[2px] after:w-[4px] after:h-[8px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45"
                />
              </th>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className={`p-4 text-xs font-medium ${
                    col.align === "center" ? "text-center" : col.align === "right" ? "text-right" : "text-left"
                  }`}
                >
                  <Typography variant="muted-sm" className="font-medium text-secondary2-100  tracking-wider">
                    {col.header}
                  </Typography>
                </th>
              ))}
         
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle bg-white">
            {data.length === 0 ? (
              <tr>
             <td colSpan={columns.length + 1} className="p-12 text-center">
                  <Typography variant="muted" className="text-grey-text">
                    No records found matching current query parameters.
                  </Typography>
                </td>
              </tr>
            ) : (
              data.map((row) => (
                <tr key={row.id} className="hover:bg-bg-subtle/40 transition-colors group">
                  <td className="p-4 text-center align-middle">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(row.id)}
                      onChange={() => handleRowSelectToggle(row.id)}
                      className="w-[18px] h-[18px] rounded-[4px] border border-primary checked:border-primary accent-primary text-white cursor-pointer transition-all focus:ring-0 focus:ring-offset-0 appearance-none bg-white checked:bg-primary relative after:content-[''] after:absolute after:hidden checked:after:block after:left-[5px] after:top-[2px] after:w-[4px] after:h-[8px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45"
                    />
                  </td>
                  {columns.map((col, colIdx) => (
                    <td
                      key={colIdx}
                      className={`p-4 whitespace-nowrap  align-middle ${
                        col.align === "center" ? "text-center" : col.align === "right" ? "text-right" : "text-left"
                      }`}
                    >
                      {col.renderCell ? (
                        col.renderCell(row)
                      ) : (
                        <Typography variant="body-regular" className="text-text">
                          {String(row[col.accessorKey as keyof TData] ?? "")}
                        </Typography>
                      )}
                    </td>
                  ))}
                  
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {data.length > 0 && (
        <div className="py-5 border-t border-grey-card-stroke bg-white flex justify-center">
          <Pagination>
            <PaginationContent className="gap-2">
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                  className={`cursor-pointer text-xs font-semibold text-grey-text hover:text-text transition-colors select-none ${
                    currentPage === 1 ? "opacity-40 pointer-events-none" : ""
                  }`}
                />
              </PaginationItem>

              {renderPageItems()}

              <PaginationItem>
                <PaginationNext
                  onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                  className={`cursor-pointer text-xs font-semibold text-grey-text hover:text-text transition-colors select-none ${
                    currentPage === totalPages ? "opacity-40 pointer-events-none" : ""
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}