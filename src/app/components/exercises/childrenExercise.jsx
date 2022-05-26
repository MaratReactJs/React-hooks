import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    );
};

const ListComponent = ({ children }) => {
    const arrayOfChildren = React.Children.toArray(children);

    return React.Children.map(arrayOfChildren, (child, index) =>
        React.cloneElement(child, {
            ...child.props,
            num: index + 1
        })
    );
};

ListComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const Component = ({ num }) => {
    console.log(num);
    return <div>{num} Компонент списка</div>;
};

Component.propTypes = {
    num: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ChildrenExercise;
