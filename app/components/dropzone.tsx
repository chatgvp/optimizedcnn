import { useRef } from "react"
import { Text, Group, Button, rem, useMantineTheme } from "@mantine/core"
import { Dropzone, MIME_TYPES } from "@mantine/dropzone"
import { FaCheckCircle, FaCloudUploadAlt, FaTimesCircle } from "react-icons/fa"
import classes from "@/app/styles/DropzoneButton.module.css"

export default function DropzoneButton() {
    const theme = useMantineTheme()
    const openRef = useRef<() => void>(null)

    return (
        <div className={classes.wrapper}>
            <Dropzone
                openRef={openRef}
                onDrop={() => {}}
                className={classes.dropzone}
                radius="md"
                accept={[MIME_TYPES.pdf]}
                maxSize={30 * 1024 ** 2}>
                <div>
                    <Group justify="center">
                        <Dropzone.Accept>
                            <FaCheckCircle
                                style={{ width: rem(50), height: rem(50) }}
                                color={theme.colors.blue[6]}
                            />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <FaTimesCircle
                                style={{ width: rem(50), height: rem(50) }}
                                color={theme.colors.red[6]}
                            />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <FaCloudUploadAlt
                                style={{ width: rem(50), height: rem(50) }}
                            />
                        </Dropzone.Idle>
                    </Group>
                    <Text ta="center" fw={700} fz="lg" mt="xl">
                        <Dropzone.Accept>Drop Music here</Dropzone.Accept>
                        <Dropzone.Reject>
                            Pdf file less than 30mb
                        </Dropzone.Reject>
                        <Dropzone.Idle>Upload Music here</Dropzone.Idle>
                    </Text>
                    <Text ta="center" fz="sm" mt="xs" c="dimmed">
                        Drag&apos;n&apos;drop music files here to classify
                        genre.
                    </Text>
                </div>
            </Dropzone>
        </div>
    )
}
