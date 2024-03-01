import { Container, Group, Anchor, Text, Title } from "@mantine/core"
import { MantineLogo } from "@mantinex/mantine-logo"
import classes from "@/app/styles/FooterSimple.module.css"
export default function FooterSimple() {

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Title>Thesis</Title>
                <Group className={classes.links}>
                    {/* <Text c="dimmed" size="sm">
                        Developed by: Evan Bonso, Charleslexcel Mendoza and
                        George Vincent Peña
                    </Text> */}
                    footer ni
                </Group>
            </Container>
        </div>
    )
}
