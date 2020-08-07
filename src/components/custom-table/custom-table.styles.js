import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
    caption-side: top;
    border: none;
    border-collapse: collapse;
    ${'' /* border-collapse: separate; */}
    ${'' /* border-spacing: 5px 10px; */}

    caption-side: bottom;
    ${'' /* empty-cell: show | hide; */}
    /* empty-cell is a property of table or the cells themselves */

    /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

    tbody {
        vertical-align: top;
    }

    td,
    th {
        border: none;
    }

    td {
        padding: 5px 10px;
    }

    tbody tr {
        :nth-of-type(odd) {
            background-color: #83E588;
        }
        :hover {
            background-color: lightpink;
        }
    }

    thead > tr {
        background-color: #fff;
    }

    caption {
        font-size: 0.9em;
        padding: 5px;
        font-weight: bold;
    }
`;

const TableMarkup = ({ titles, data }) => (
    <StyledTable>
        <caption>Plant Inventory</caption>
        <colgroup>
            <col />
            <col />
            <col />
        </colgroup>
        <thead>
            <tr>
            {titles.map((title, index) => (
                <th key={index}>{title}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
            <tr key={index}>
                {titles.map((title, index) => (
                <td key={index}>{item[title]}</td>
                ))}
            </tr>
            ))}
        </tbody>
    </StyledTable>
);


export default ({ data }) => (
    <TableMarkup titles={Object.keys(data[0])} data={data} />
);