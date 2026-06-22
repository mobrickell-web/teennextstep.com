import { create } from "zustand";

/** Default active tab on the results dashboard. */
export const DEFAULT_RESULTS_TAB = "parent-insight";

type ResultsTabState = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

/**
 * Shared active-tab state for the results dashboard so the navbar role menu
 * can switch tabs from outside the results section.
 */
export const useResultsTabStore = create<ResultsTabState>((set) => ({
  activeTab: DEFAULT_RESULTS_TAB,
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
