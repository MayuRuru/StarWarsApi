import React from "react";
import { Container, Menu } from "semantic-ui-react";

export default function Navbar() {
  return (
    <Container>
      <Menu inverted>
        <Menu.Item name="planets" />
        <Menu.Item name="people" />
      </Menu>
    </Container>
  );
}
