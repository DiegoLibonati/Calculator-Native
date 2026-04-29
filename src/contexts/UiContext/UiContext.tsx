import { createContext } from "react";

import type { UiContext as UiContextT } from "@/types/contexts";

export const UiContext = createContext<UiContextT | null>(null);
