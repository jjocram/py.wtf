import { Box } from "@welcome-ui/box";
import { Flex } from "@welcome-ui/flex";
import { Stack } from "@welcome-ui/stack";
import React, { ReactNode } from "react";

import { Project } from "@/lib/docs";

import Sidebar from "./Sidebar/Sidebar";

interface Props {
  project: Project;
  children: ReactNode;
  sidebar?: ReactNode;
}

export default function Layout({ project, sidebar, children }: Props) {
  return (
    <Flex backgroundColor="light.700" color="dark.700" direction="column">
      <Stack direction="row" minHeight="100vh">
        <Sidebar project={project}>{sidebar}</Sidebar>
        <Box marginLeft="md" maxWidth="80em">
          {children}
        </Box>
      </Stack>
    </Flex>
  );
}
