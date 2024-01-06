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
} from "@mantine/core"
import DropzoneButton from "./components/dropzone"
export default function Home() {
    return (
        <Container pt="xl">
            <Center>
                <DropzoneButton />
            </Center>
            <br />
            <Grid>
                <Grid.Col span={6}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                        <Title>Optimized CNN</Title>
                        <Group>
                            <Text fw={700}>Music Genre:</Text>
                            <Badge color="pink">Jazz</Badge>
                        </Group>
                        <Group>
                            <Text fw={700}>Accuracy:</Text>
                            <Text size="sm" c="dimmed">
                                69%
                            </Text>
                        </Group>
                        <Group>
                            <Text fw={700}>Speed:</Text>
                            <Text size="sm" c="dimmed">
                                7.3 ms
                            </Text>
                        </Group>
                    </Card>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                        <Title>CNN</Title>
                        <Group>
                            <Text fw={700}>Music Genre:</Text>
                            <Badge color="pink">Jazz</Badge>
                        </Group>
                        <Group>
                            <Text fw={700}>Accuracy:</Text>
                            <Text size="sm" c="dimmed">
                                60%
                            </Text>
                        </Group>
                        <Group>
                            <Text fw={700}>Speed:</Text>
                            <Text size="sm" c="dimmed">
                                9.2 ms
                            </Text>
                        </Group>
                    </Card>
                </Grid.Col>
            </Grid>
        </Container>
    )
}
