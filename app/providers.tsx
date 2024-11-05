"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import CssBaseline from "@mui/material/CssBaseline";


const clientSideEmotionCache = createEmotionCache();

interface ProvidersProps {
    children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <CacheProvider value={clientSideEmotionCache}>
            <CssBaseline />
            {children}
        </CacheProvider>
    );
}