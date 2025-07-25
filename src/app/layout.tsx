import "@ant-design/v5-patch-for-react-19";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainProvider from "../providers/MainProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Karyawan AI Dashboard",
    description: "Karyawan AI Dashboard",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} antialiased main-scroll`}
            >
                <MainProvider>{children}</MainProvider>
            </body>
        </html>
    );
}
