const LazyLoadHoc = (WrapperComponent: () => JSX.Element) => {
    return (props: any) => {
        
        return <WrapperComponent {...props} />
    }
}