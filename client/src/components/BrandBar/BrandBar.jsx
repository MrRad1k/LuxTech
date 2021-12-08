import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import ListGroup from "react-bootstrap/ListGroup";
import './style.css'


const BrandBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <ListGroup>
            <div className="div-custom-style1">Фильтр</div>

            {device.brands.map(brand =>
                <ListGroup.Item
                    className="mt-2"
                    active={brand.id === device.selectedBrand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    key={brand.id}
                >
                    {brand.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default BrandBar;