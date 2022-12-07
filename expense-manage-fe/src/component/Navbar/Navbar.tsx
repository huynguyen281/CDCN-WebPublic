import { Box, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setNameItemNav} from "../../app/reducer/nameItemNav/nameItemNavSlice";


import { ItemNavbar } from "./ItemNavbar";

export const Navbar: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<VStack width={"100%"} padding="0px" spacing={5} backgroundColor="#f0eae4">
			{/* Header */}
			<Box
				width={"100%"}
				height="auto"
				backgroundColor="#f0eae4"
				padding={"30px 0px"}
				position="sticky"
				top={"0"}
				zIndex="2"
				opacity="1"
			>
				<HStack
					width={"100%"}
					height={"auto"}
					justifyContent={"space-around"}
					alignContent="center"
					position={"fixed"}
					top={"0"}
					left="0"
					right={"0"}
					margin={"10px 0px"}
					paddingRight="20px"
				>
					<Heading fontWeight={"700"} color="#332c47">
						ExpensE
					</Heading>
					<Box>
						<HStack spacing={10}>
							<ItemNavbar
								name="Trang chủ"
								navigate="/home"
								handleClickItem={() => dispatch(setNameItemNav("Trang chủ"))}
							/>
							<ItemNavbar
								name="Liên lạc"
								navigate="/contact"
								handleClickItem={() => dispatch(setNameItemNav("Liên lạc"))}
							/>
							<ItemNavbar
								name="Our team"
								navigate="/team"
								handleClickItem={() => dispatch(setNameItemNav("Our team"))}
							/>
						</HStack>
					</Box>
					<Box
						_hover={{ color: "grey" }}
						_active={{ color: "grey" }}
						color="#332c47"
						//bgGradient="linear-gradient(to right, #d49457 10%,#c75422 90%)"
						bgColor={'#fea774'}
						borderRadius="40px"
						padding={"10px"}
						boxShadow="5px 5px 15px #fea774"
						cursor={"pointer"}
						onClick={() => navigate("/register")}
					>
						<HStack justifyContent={"center"}>
							<Text fontWeight={"400"}>Tải app ngay</Text>
						</HStack>
					</Box>
				</HStack>
			</Box>
		</VStack>
	);
};
