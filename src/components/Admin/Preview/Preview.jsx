// import React, { memo, useEffect } from "react";

// import MarkDown from "markdown-to-jsx";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

// import { Space, Tag, Typography, Image } from "antd";
// import Icon from "@ant-design/icons";
// import { CalendarIcon } from "../../../svg";

// import { useSelector } from "react-redux";

// import moment from "moment";
// import "moment/locale/vi";

// const Preview = memo((props) => {
//     const { Title, Text, Link } = Typography;
//     const markdown = useSelector((state) => state.postReducer);
//     useEffect(() => {
//         console.log(markdown);
//     });
//     return (
//         <div style={{ height: "100vh", textAlign: "center" }}>
//             <Space
//                 direction="vertical"
//                 style={{ marginTop: "96px" }}
//             >
//                 <Title>{markdown.title}</Title>
//                 {/* Date and tags */}
//                 <Space>
//                     <Space>
//                         <Icon component={CalendarIcon} />
//                         <Text>{moment().format("L")}</Text>
//                     </Space>
//                     {markdown.tags.map(() => {
//                         return (
//                             <Tag
//                                 key={
//                                     Math.random() /
//                                     Math.random()
//                                 }
//                                 color="blue"
//                             >
//                                 <Link>React</Link>
//                             </Tag>
//                         );
//                     })}
//                 </Space>
//                 {/* Featured image */}
//                 <Space size={-6} direction="vertical">
//                     <Image
//                         width={512}
//                         src="https://i.pinimg.com/originals/11/1a/03/111a03133d14214539c96e0f657dff1a.png"
//                         alt=""
//                     />
//                     <Text
//                         type="secondary"
//                         style={{ fontSize: "12px" }}
//                     >
//                         This is description of picture.
//                     </Text>
//                 </Space>
//                 {/* content */}
//                 <Space>
//                     <MarkDown
//                         children={markdown.content}
//                         options={{
//                             overrides: {
//                                 pre: {
//                                     component: Space,
//                                 },
//                                 code: {
//                                     component: SyntaxHighlighter,
//                                     props: {
//                                         language: jsx,
//                                         style: atomOneDark,
//                                         showLineNumbers: true,
//                                         wrapLongLines: true,
//                                     },
//                                 },
//                             },
//                         }}
//                     />
//                 </Space>
//             </Space>
//         </div>
//     );
// });

// export default Preview;

// {
//     /* ; */
// }
