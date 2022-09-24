import tw from 'tailwind-styled-components';
import styled from 'styled-components';
const Containers = tw.section`
   bg-indigo-600
`;

const H1 = styled.h1`
   color: white;
`;

const Span = tw.span`
   text-2xl
`;

const Box = tw.div`
   bg-red-200
   w-8
   h-8
   text-3xl
   text-blue-400
`;
const Parent = styled.div``;

function App() {
   return (
      <Containers>
         <H1>Hello world!</H1>
         <Span>hOLA</Span>
         <Box>
            ok ?<b>df</b>
         </Box>
      </Containers>
   );
}

export default App;
