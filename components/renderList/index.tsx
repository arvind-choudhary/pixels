interface IProps {
    list: Array<any>,
    render(input: any, index: number): any;
}

export const RenderList = ({ list, render }: IProps): any  => {
    return list.map((values, index) => render(values, index));
}