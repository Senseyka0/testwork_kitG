import { ReactNode } from "react";

const ContentLayout = ({ children }: Props) => {
	return <div className="content-wrapper">{children}</div>;
};

interface Props {
	children: ReactNode | ReactNode[];
}

export default ContentLayout;
