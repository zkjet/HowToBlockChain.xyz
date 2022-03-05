import { Anchor, Box, Heading, Paragraph } from 'grommet';
import Image from 'next/image';
import logoFile from './logo.png';

export default function Home() {
  return (
    <Box align="center" margin="large">
      <Heading>HowToBlockChain.xyz</Heading>
      <Image src={logoFile} alt="Logo" width={350} height={175} />
      <Paragraph>
        Everything you need to connect to your favorite blockchain!      </Paragraph>
    </Box>
  )
}
