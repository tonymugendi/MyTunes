import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/layout"
import { MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite } from "react-icons/md"
import NextImage from "next/image"
import Link from "next/link"
import { usePlaylists } from "../lib/hooks"


const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/"
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search"
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library"
  }
]

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/"
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites"
  }
]

const Sidebar = () => {
  const { playlists } = usePlaylists();


  return (
    <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX="5px" color="gray">
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage width={160} height={80} src="/logo.svg" />
        </Box>

        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map(menu => (
              <ListItem paddingX="20px" fontSize="18px" key={menu.name}>
                <LinkBox>
                  <Link href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={menu.icon} color="white" marginRight="20px" />
                      {menu.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />
        <Box marginY="20px">
          <List spacing={2}>
            {musicMenu.map(menu => (
              <ListItem paddingX="20px" fontSize="18px" key={menu.name}>
                <LinkBox>
                  <Link href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={menu.icon} color="white" marginRight="20px" />
                      {menu.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />
        <Box height="60%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists.map((playlist) => (
              <ListItem paddingX="20px" key={playlist.id}>
                <LinkBox>
                  <Link href={{
                    pathname: "/playlist/[id]",
                    query: { id: playlist.id }
                  }} passHref>
                    <LinkOverlay>{playlist.name}</LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar