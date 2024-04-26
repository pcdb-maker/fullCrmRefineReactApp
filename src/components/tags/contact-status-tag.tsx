import React from "react";

import {
  CheckCircleOutlined,
  MinusCircleOutlined,
  PlayCircleFilled,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { Tag, TagProps } from "antd";

import { ContactStatus } from "@/graphql/schema.types";

export const ContactStatusTag: React.FC<{ status: ContactStatus }> = ({
  status,
}) => {
  let icon: React.ReactNode = null;
  let color: TagProps["color"] = undefined;

  switch (status) {
    case "NEW":
    case "CONTACTED":
    case "INTERESTED":
      // @ts-ignore
      icon = <PlayCircleOutlined />;
      color = "cyan";
      break;
    case "UNQUALIFIED":
      // @ts-ignore
      icon = <PlayCircleOutlined />;
      color = "red";
      break;
    case "QUALIFIED":
    case "NEGOTIATION":
      // @ts-ignore
      icon = <PlayCircleFilled />;
      color = "green";
      break;
    case "LOST":
      // @ts-ignore
      icon = <PlayCircleFilled />;
      color = "red";
      break;
    case "WON":
      // @ts-ignore
      icon = <CheckCircleOutlined />;
      color = "green";
      break;
    case "CHURNED":
      // @ts-ignore
      icon = <MinusCircleOutlined />;
      color = "red";
      break;

    default:
      break;
  }

  return (
    <Tag color={color} style={{ textTransform: "capitalize" }}>
      {icon} {status.toLowerCase()}
    </Tag>
  );
};
