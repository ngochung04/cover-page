import "./App.css";
import { Box, Button, Image, Text } from "@chakra-ui/react";

function App() {
  return (
    <Box
      fontFamily="Mulish, sans-serif"
      display="flex"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w="1404px"
        h="780px"
        rounded="32px"
        position="relative"
        overflow="hidden"
      >
        <Box
          bg="#FF5C00"
          w="514px"
          h="514px"
          rounded="100%"
          left="1048px"
          top="-98px"
          position="absolute"
        />
        <Box
          zIndex={-1}
          bg="#CD0606"
          w="278px"
          h="278px"
          rounded="100%"
          left="-56px"
          top="584px"
          position="absolute"
        />
        <Box
          w="1404px"
          h="780px"
          bg="rgba(255, 255, 255, 0)"
          backdropFilter="blur(470px)"
          rounded="32px"
          position="absolute"
        />
        <Text
          position="absolute"
          top="13px"
          left="101px"
          w="760px"
          h="180px"
          fontWeight="800"
          fontSize="72px"
          lineHeight="90.36px"
          letterSpacing="1px"
          color="#373839"
          zIndex={2}
        >
          LMS - Learning Management System
        </Text>
        <Button
          position="absolute"
          top="298px"
          left="100px"
          fontFamily="Mulish, sans-serif"
          rounded="16px"
          w="402px"
          h="102px"
          fontSize="56px"
          color="white"
          border="none"
          fontWeight="800"
          letterSpacing="0.8px"
          css={{
            background: "linear-gradient(270deg, #FF5400 0%, #F17F21 80.56%)",
          }}
        >
          E-Learning
        </Button>
        <Box
          position="absolute"
          width="572px"
          height="572px"
          rounded="100%"
          right="80px"
          top="92px"
          bg="#FFF4F1"
          zIndex={1}
          boxShadow="inset 10px -10px 50px rgba(255, 203, 174, 0.8)"
        />
        <Image
          zIndex={5}
          position="absolute"
          src="https://s3-alpha-sig.figma.com/img/04fd/31db/b977287a14ed60412bc743112d60f4ae?Expires=1654473600&Signature=e~NymEZUmpDDbuTx7gJ0a9EDbo6hrqULx~a6rQw-sr-~aS29PE8XY3IwqF~AxNYZE2KQgIGe7egzmpMR33nEcNvTbnl76v21VCWvl1v74r8KtAQEbRCWwp~TqWVgIEsqlTC7o2MmlAPZ2k6ZkfLr6UWNolJIONYfK2G69a1450FdUcMUxe1oHljIlOFTjEZzMk-7UlP3nRfR2hBuGYMA27b1T1ZwARfzCizi~Ie3~BuhZutjF3sMxqtb-YhJCMvwsRZ343tDuJfe-4XD~I454SxXWO7BOb~dW~T46mSF8YM6K9dqRN0AxEOq22kNz2ZGH6baZMqOk5pdTo-JSciMGQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          w="596px"
          h="482px"
          top="70px"
          right="57px"
        />
        <Text
          color="#373839"
          fontSize="26px"
          fontWeight="400"
          position="absolute"
          left="100px"
          top="520px"
          letterSpacing="-0.35px"
        >
          Hệ thống giáo dục được phát triển bởi
        </Text>
        <Box>
          <Image
            position="absolute"
            top="598px"
            left="242px"
            src="https://s3-alpha-sig.figma.com/img/46f6/f131/72287bb7a9c73091ea02a53607e4002f?Expires=1654473600&Signature=ZiyWKxQrsj-27Um~IeB7I~oT0suRkvR2QqdH9Em-MlEfNZ9Eet16GNiDh2S9ivpWi7cCJgdAvivUcet2ZD6dolBXFNjBCuMv11IKoTpxy9-sS23SJ12XsNtOM4OId2V-dsU5X1lXtYDkkte2di7u7XlSk716190DRzR8Bcd8A~TeUNRZpHwu4Zp4sN0BE8rMz4Zzy7zIYYkfxSOB64TVltJqsr1U90Nxbt~8G57-PB0rv7XmOGSkRwNrgWnk9Wy1Y388qZQ6ohJFv46xzUtztPVU58MzQSRQ8XmAP7BtLIuuaM9leVsy4DBqXCxy6toOe3dJJajMb4EbcRZZWdINqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            w="174px"
            h="136px"
          />
          <Text
            fontStyle="italic"
            position="absolute"
            top="684px"
            left="892px"
            color="#CC5C00"
            fontSize="24px"
            fontWeight="400"
          >
            Designed by UI/UX Team of Alta Media
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
