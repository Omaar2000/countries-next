import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Loading = () => {
  return <Spin indicator={<LoadingOutlined spin />} size="large" />;
};

export default Loading;
