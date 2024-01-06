"use client"
import React from "react"
import { AppShell, Title, Center, MantineProvider, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"

import "@mantine/core/styles.css"
import "@mantine/dropzone/styles.css"
import FooterSimple from "./components/footer"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const matches = useMediaQuery("(min-width: 42em)")

    return (
        <html lang="en">
            <body>
                <MantineProvider>
                    <AppShell
                        header={{ height: 85 }}
                        padding="md"
                        // footer={{ height: 200 }}
                    >
                        <AppShell.Header>
                            <Center pb="md">
                                <Title order={1}>
                                    {matches
                                        ? "Optimized Convolutional Neural Network"
                                        : "Optimized CNN"}
                                    <Text>for music genre classification</Text>
                                </Title>
                            </Center>
                        </AppShell.Header>

                        <AppShell.Main>{children}</AppShell.Main>
                        <AppShell.Footer>
                            <FooterSimple />
                        </AppShell.Footer>
                    </AppShell>
                </MantineProvider>
            </body>
        </html>
    )
}
