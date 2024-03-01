import { Group, Text, rem } from "@mantine/core"
import { IconUpload, IconMusic, IconX } from "@tabler/icons-react" // Changed IconPhoto to IconMusic
import { Dropzone, DropzoneProps } from "@mantine/dropzone"
import { useState } from "react"

export default function BaseDemo(
    props: Partial<DropzoneProps & { onFileDrop: (file: File) => void }>
) {
    const [selectedFileName, setSelectedFileName] = useState(null)
    const handleFileDrop = (files: any) => {
        if (props.onFileDrop) {
            props.onFileDrop(files[0])
            setSelectedFileName(files[0].name)
        }
    }
    return (
        <Dropzone onDrop={handleFileDrop}>
            <Group
                justify="center"
                gap="xl"
                mih={220}
                style={{ pointerEvents: "none" }}>
                {/* Display the selected file name if available */}
                {selectedFileName ? (
                    <Text size="xl" inline>
                        {selectedFileName}
                    </Text>
                ) : (
                    <>
                        <Dropzone.Accept>
                            <IconUpload
                                style={{
                                    width: rem(52),
                                    height: rem(52),
                                    color: "var(--mantine-color-blue-6)",
                                }}
                                stroke={1.5}
                            />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX
                                style={{
                                    width: rem(52),
                                    height: rem(52),
                                    color: "var(--mantine-color-red-6)",
                                }}
                                stroke={1.5}
                            />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconMusic // Changed IconPhoto to IconMusic
                                style={{
                                    width: rem(52),
                                    height: rem(52),
                                    color: "var(--mantine-color-dimmed)",
                                }}
                                stroke={1.5}
                            />
                        </Dropzone.Idle>

                        <div>
                            <Text size="xl" inline>
                                Drag audio files here or click to select files{" "}
                                {/* Changed text for audio */}
                            </Text>
                            <Text size="sm" c="dimmed" inline mt={7}>
                                Attach as many files as you like, each file
                                should not exceed 5mb
                            </Text>
                        </div>
                    </>
                )}
            </Group>
        </Dropzone>
    )
}
