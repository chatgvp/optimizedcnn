"use client"
import {
    Badge,
    Button,
    Card,
    Center,
    Container,
    Grid,
    Group,
    Title,
    Text,
    Image,
    Loader,
} from "@mantine/core"
import BaseDemo from "./components/dropzone"
import { useState } from "react"

// ... (your existing imports)

interface ClassificationResults {
    result_optimize_cnn: {
        predicted_genre: string
        predicted_percentages: Record<string, number>
    } | null
    result_cnn: {
        predicted_genre: string
        predicted_percentages: Record<string, number>
    } | null
}

export default function Home() {
    const [loading, setLoading] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null as File | null)
    const [classificationResults, setClassificationResults] =
        useState<ClassificationResults>({
            result_optimize_cnn: null,
            result_cnn: null,
        })

    const handleFileDrop = (file: File) => {
        setSelectedFile(file)
    }

    const handleClassifyClick = () => {
        console.log("clicked")
        setLoading(true)
        if (selectedFile) {
            const formData = new FormData()
            formData.append("file", selectedFile)
            console.log("set clicked")
            fetch("https://optimizecnn-backend.onrender.com/classify_music/", {
                method: "POST",
                body: formData,
            })
                .then((response) => response.json())
                .then((data: ClassificationResults) => {
                    console.log("set clicked")
                    setClassificationResults(data)
                    setLoading(false)
                })
                .catch((error) => {
                    console.error("API Error:", error)
                })
        }
    }

    const renderGenreInfo = (predictedGenres: Record<string, number>) => {
        // Convert predictedGenres into an array of objects
        const genreArray = Object.entries(predictedGenres).map(
            ([genre, percentage]) => ({ genre, percentage })
        )

        // Sort the array by percentage in descending order
        genreArray.sort((a, b) => b.percentage - a.percentage)

        // Render the sorted genres
        return genreArray.map(({ genre, percentage }) => (
            <Group key={genre}>
                <Text fw={700}>{genre}:</Text>
                <Text size="sm" c="dimmed">
                    {percentage.toFixed(2)}%
                </Text>
            </Group>
        ))
    }

    return (
        <Container pt="xl">
            <Center>
                <BaseDemo onFileDrop={handleFileDrop} />
            </Center>
            <br />
            <Grid>
                <Grid.Col span={6}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                        <Title>Optimized CNN</Title>
                        {classificationResults.result_optimize_cnn && (
                            <>
                                <Group>
                                    <Text fw={700}>Music Genre:</Text>
                                    <Badge color="pink">
                                        {
                                            classificationResults
                                                .result_optimize_cnn
                                                .predicted_genre
                                        }
                                    </Badge>
                                </Group>
                                {renderGenreInfo(
                                    classificationResults.result_optimize_cnn
                                        .predicted_percentages
                                )}
                            </>
                        )}
                    </Card>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                        <Title>CNN</Title>
                        {classificationResults.result_cnn && (
                            <>
                                <Group>
                                    <Text fw={700}>Music Genre:</Text>
                                    <Badge color="pink">
                                        {
                                            classificationResults.result_cnn
                                                .predicted_genre
                                        }
                                    </Badge>
                                </Group>
                                {renderGenreInfo(
                                    classificationResults.result_cnn
                                        .predicted_percentages
                                )}
                            </>
                        )}
                    </Card>
                </Grid.Col>
            </Grid>
            <Button onClick={handleClassifyClick} loading={loading}>
                Classify
            </Button>
        </Container>
    )
}
