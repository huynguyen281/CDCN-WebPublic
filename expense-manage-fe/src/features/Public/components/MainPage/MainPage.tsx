import React from 'react'
import {
  Box,
  Heading,
  HStack,
  Image,
  VStack,
  Text,
  AspectRatio,
  Flex
} from '@chakra-ui/react'
import { AiTwotonePhone } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import { BsFacebook } from 'react-icons/bs'
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
} from 'react-icons/ai'
import { BsArrowUpRight } from 'react-icons/bs'

export const MainPage: React.FC = () => {
  return (
    <VStack width={'100%'} padding="0px" spacing={5} backgroundColor="#f0eae4">
      <Heading
        width={'60%'}
        fontWeight="700"
        fontSize={'65px'}
        paddingTop="40px"
        color="#332c47"
      >
        Quản lý và thực hiện{' '}
        <span style={{ fontStyle: 'italic' }}>chi tiêu</span> một cách thông
        minh
      </Heading>
      <HStack
        width={'100%'}
        justifyContent="space-evenly"
        padding={'30px 10px'}
      >
        <VStack
          width={'90%'}
          alignItems="flex-start"
          spacing={'7'}
          paddingLeft="20px"
        >
          <Text width={'80%'} textAlign="left" fontWeight={500} color="#332c47">
            Một ứng dụng tuyệt vời mà bạn không thể bỏ lỡ, một sản phẩm tuyệt
            vời đến từ những nhà sáng tạo
          </Text>
          <HStack spacing={0} width="100%">
            <Image
              src="/images/hang.jpg"
              borderRadius="full"
              boxSize="70px"
              position={'relative'}
              left="0"
              border={'1px solid #f0eae4'}
            />
            <Image
              src="/images/huy.jpg"
              borderRadius="full"
              boxSize="70px"
              position={'relative'}
              left="-6"
              border={'3px solid #f0eae4'}
            />
            <Image
              src="/images/nhinhi.jpg"
              borderRadius="full"
              boxSize="70px"
              position={'relative'}
              left="-12"
              border={'3px solid #f0eae4'}
            />
            <Image
              src="/images/lml.jpg"
              borderRadius="full"
              boxSize="70px"
              position={'relative'}
              left="-20"
              border={'3px solid #f0eae4'}
            />
            <Image
              src="/images/tuyen.png"
              borderRadius="full"
              boxSize="70px"
              position={'relative'}
              left="-99"
              border={'3px solid #f0eae4'}
            />
            <Image
              src="/images/thao.jpg"
              borderRadius="full"
              boxSize="70px"
              position={'relative'}
              left="-120"
              border={'3px solid #f0eae4'}
            />
			<Image
              src="/images/public.png"
              borderRadius="full"
              boxSize="70px"
              position={'relative'}
              left="-130"
              border={'3px solid #f0eae4'}
            />
          </HStack>
        </VStack>
        <Image src="/images/mainpublic1.png" width={'25%'} />
        <VStack
          width={'100%'}
          alignItems="center"
          justifyItems={'center'}
          spacing={20}
        >
          <HStack width={'100%'} spacing={0} justifyContent="space-evenly">
            <VStack width={'40%'}>
              <Text fontSize={'40px'} fontWeight="600" color={'#532d29'}>
                10K<span style={{ color: '#c75422' }}>+</span>
              </Text>
              <Text align={'center'} color="#9c7d6e">
                Khách hành thân thiết
              </Text>
            </VStack>
            <VStack width={'25%'}>
              <Text fontSize={'40px'} fontWeight="600" color={'#532d29'}>
                10<span style={{ color: '#c75422' }}>+</span>
              </Text>
              <Text align={'center'} color="#9c7d6e">
                Tiện ích quản lý
              </Text>
            </VStack>
          </HStack>
          <HStack
            width={'55%'}
            justifyContent="space-between"
            border={'1px solid #9c7d6e'}
            padding="10px 15px"
            borderRadius={'50px'}
            boxSizing="border-box"
          >
            <Text color="#332c47" fontSize={'17px'}>
              Khám phá ứng dụng
            </Text>
            <Box
              bgColor={'#fea774'}
              padding="20px"
              borderRadius={'30px'}
              cursor="pointer"
            >
              <BsArrowUpRight />
            </Box>
          </HStack>
        </VStack>
      </HStack>

      <HStack
        width={'100%'}
        height="70vh"
        spacing={5}
        padding="20px 0px"
        paddingLeft={'50px'}
      >
        <Text
          width={'30%'}
          fontSize="30px"
          fontWeight={'500'}
          color="#332c47"
          textAlign={'left'}
        >
          Bạn đã sẵn sàng để nâng cấp cho các kế hoạch chi tiêu cho bản thân?
        </Text>
        <VStack width={'70%'} spacing={20}>
          <Text
            width={'80%'}
            fontSize="20px"
            fontWeight={'400'}
            color="#9c7d6e"
            textAlign={'left'}
          >
            Việc quản lý các chi tiêu cá nhân sẽ trở nên dễ dàng hơn với sự giám
            sát và tính toán chi tiết phù hợp với ví tiền của bạn
          </Text>
          <HStack width={'80%'} spacing={10}>
            <VStack width={'50%'} alignItems="flex-start" spacing={5}>
              <Text
                width={'100%'}
                fontSize="20px"
                fontWeight={700}
                color="#332c47"
                textAlign={'left'}
              >
                Báo cáo
              </Text>
              <Text width={'100%'} textAlign="left" color="#9c7d6e">
                Báo cáo chi tiêu một cách chi tiết
              </Text>
            </VStack>
            <VStack width={'5px'} height="70px" bg={'#332c47'} />
            <VStack width={'40%'} alignItems="flex-start" spacing={5}>
              <Text
                width={'100%'}
                fontSize="20px"
                fontWeight={700}
                color="#332c47"
                textAlign={'left'}
              >
                Thông báo
              </Text>
              <Text width={'100%'} textAlign="left" color="#9c7d6e">
                Lập thời gian cho chi tiêu
              </Text>
            </VStack>
            <VStack width={'5px'} height="70px" bg={'#332c47'} />
            <VStack width={'40%'} alignItems="flex-start" spacing={5}>
              <Text
                width={'100%'}
                fontSize="20px"
                fontWeight={700}
                color="#332c47"
                textAlign={'left'}
              >
                Lịch sử
              </Text>
              <Text width={'100%'} textAlign="left" color="#9c7d6e">
                Tất cả thông tin chi tiêu hiển thị
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </HStack>

      {/* Quality */}
      <HStack paddingTop={'70px'} paddingBottom="70px">
        <VStack width={'50%'}>
          <Heading fontWeight="700" color={'#332c47'}>
            An tâm với <span style={{ color: '#d49457' }}>sự lựa chọn</span> của
            bạn
          </Heading>
          <Text width={'80%'} align="left" paddingTop={'20px'} color="#9c7d6e">
            Những tính năng của chúng tôi mang tính tiện ích, phù hợp với điều
            kiện giải quyết các vấn đề quản lý chi tiêu của bạn. Đó là lý do bạn
            nên chọn chúng tôi.
          </Text>
        </VStack>
        <VStack width={'50%'}>
          <Image
            src="./images/public5.png"
            border="1px solid #faf2e5"
            boxShadow="7px 7px 7px #f6d79f"
            width="70%"
            height={'90vh'}
          ></Image>
        </VStack>
      </HStack>

      <HStack padding={'100px 0px'}>
        <VStack width={'50%'}>
          <Image
            src="./images/mainpublic1.png"
            width="60%"
            height={'100vh'}
          ></Image>
        </VStack>
        <VStack width={'50%'} spacing={10}>
          <Heading fontWeight="700" color={'#332c47'}>
            Những <span style={{ color: '#d49457' }}>tính năng mới</span> của
            ứng dụng
          </Heading>
          <Text width={'80%'} align="center" paddingTop={'0px'} color="#9c7d6e">
            Chúng tôi luôn cập nhật những tính năng mới nhất để đáp ứng những
            nhu cầu hàng ngày của mỗi khách hàng. Bạn có thể trải nghiệm những
            tính năng ấy ở mỗi dịch vụ bạn sử dụng
          </Text>
        </VStack>
      </HStack>

      <VStack
        width={'80%'}
        spacing={10}
        backgroundColor="#e4daca"
        justifyContent={'center'}
        align="center"
        padding={'50px'}
        borderRadius="20px"
      >
        <Heading color={'#332c47'}>
          Hãy <span style={{ color: '#d49457' }}>trải nghiệm ngay</span> cùng
          chúng tôi
        </Heading>
        <Text width={'60%'} align="center" color="#9c7d6e">
          Hãy trải nghiệm sản phẩm của chúng tôi và tận hưởng những giá trị
          tuyệt vời của chúng
        </Text>
        <Box
          color="#332c47"
          bgColor={'#fea774'}
          borderRadius="40px"
          padding={'10px'}
          boxShadow="5px 5px 15px #fea774"
          cursor="pointer"
        >
          <Text>Tải app ngay</Text>
        </Box>
      </VStack>

      <Box minWidth={'100%'} minHeight="20%" padding="100px 0px">
        <AspectRatio ratio={21 / 9}>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8374416354745!2d108.14770341462636!3d16.073923188878013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218d68dff9545%3A0x714561e9f3a7292c!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBLaG9hIC0gxJDhuqFpIGjhu41jIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1668759641745!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </AspectRatio>
      </Box>
      <VStack width={'100%'} backgroundColor={'#e4daca'}>
        <HStack
          width={'100%'}
          paddingBottom="80px"
          paddingTop={'60px'}
          justifyContent="space-between"
        >
          <VStack
            width={'50%'}
            alignContent="center"
            justifyContent={'center'}
            spacing={0}
          >
            <Image src="./images/logoPublic.png" width={'40%'} height="30%" />
            <Heading
              fontWeight={'500'}
              width={'45%'}
              color="#332c47"
              fontSize={'40px'}
            >
              ExpensE
            </Heading>
          </VStack>

          <Flex flexDir={'row'} width={'70%'} alignContent="flex-start">
            <VStack alignContent="flex-start" paddingRight={'50px'}>
              <HStack alignContent={'flex-start'} width="100%">
                <Text fontWeight={'500'} color="#332c47" fontSize={'25px'}>
                  Liên hệ
                </Text>
              </HStack>
              <HStack alignContent={'flex-start'} width="100%">
                <AiTwotonePhone />
                <Text color={'#9c7d6e'}>090934998527</Text>
              </HStack>
              <HStack alignContent={'flex-start'} width="100%">
                <MdEmail />
                <Text color={'#9c7d6e'}>info@expenseweb.vn</Text>
              </HStack>
            </VStack>

            <VStack alignContent="flex-start" width={'30%'}>
              <HStack
                alignContent={'flex-start'}
                width="100%"
                paddingLeft={'25px'}
              >
                <Text fontWeight={'500'} color="#332c47" fontSize={'25px'}>
                  Địa chỉ
                </Text>
              </HStack>

              <Flex flexDir={'row'} width="100%">
                <ImLocation />
                <Text width={'80%'} paddingLeft="10px" color={'#9c7d6e'}>
                  54 Nguyễn Lương Bằng, Quận Liên Chiểu, Đà Nẵng
                </Text>
              </Flex>
            </VStack>

            <VStack justifyContent={'center'} height="100%">
              <HStack>
                <Text fontWeight={'500'} color="#332c47" fontSize={'25px'}>
                  Trang thông tin
                </Text>
              </HStack>
              <HStack>
                <BsFacebook size={'20'} cursor="pointer" color="#d49457" />
                <AiFillInstagram size={'25'} cursor="pointer" color="#532d29" />
                <AiFillYoutube size={'25'} cursor="pointer" color="#d49457" />
                <AiFillTwitterCircle
                  size={'25'}
                  cursor="pointer"
                  color="#532d29"
                />
              </HStack>
            </VStack>
          </Flex>
        </HStack>

        <Box backgroundColor={'#e4daca'} width="100%">
          <Text fontSize="14px" color="#9c7d6e" textAlign="center">
            © 2022 ExpenseWeb. Proudly created by expense team
          </Text>
        </Box>
      </VStack>
    </VStack>
  )
}
