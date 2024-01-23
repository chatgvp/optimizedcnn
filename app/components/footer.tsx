import { Container, Group, Anchor, Text, Title } from "@mantine/core"
import { MantineLogo } from "@mantinex/mantine-logo"
import classes from "@/app/styles/FooterSimple.module.css"

const links = [
    { link: "#", label: "Contact" },
    { link: "#", label: "Privacy" },
    { link: "#", label: "Blog" },
    { link: "#", label: "Careers" },
]

export default function FooterSimple() {
    const items = links.map((link) => (
        <Anchor<"a">
            c="dimmed"
            key={link.label}
            href={link.link}
            onClick={(event) => event.preventDefault()}
            size="sm">
            {link.label}
        </Anchor>
    ))

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
