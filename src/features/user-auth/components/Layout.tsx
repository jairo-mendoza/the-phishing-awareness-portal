type LayoutProps = {
    children: React.ReactNode;
    title: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
    return (
        <>
            <h1>{title}</h1>
            {children}
        </>
    );
};
