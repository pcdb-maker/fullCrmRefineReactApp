import { FC, ReactElement } from "react";

import {
  CheckCircleOutlined,
  ExpandOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";

import { QuoteStatus } from "@/graphql/schema.types";

const variant: Record<QuoteStatus, { color: string; icon: ReactElement }> = {
  DRAFT: {
    color: "blue",
    // @ts-ignore
    icon: <ExpandOutlined />,
  },
  SENT: {
    color: "cyan",
    // @ts-ignore
    icon: <SendOutlined />,
  },
  ACCEPTED: {
    color: "green",
    // @ts-ignore
    icon: <CheckCircleOutlined />,
  },
};

type Props = {
  status: QuoteStatus;
};

export const QuoteStatusTag: FC<Props> = ({ status }) => {
  return (
    <Tag
      style={{
        textTransform: "capitalize",
      }}
      color={variant[status].color}
      icon={variant[status].icon}
    >
      {status.toLowerCase()}
    </Tag>
  );
};
