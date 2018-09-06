import React, { Fragment } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Item = props => (
    <PaginationItem active={props.active}
        onClick={() => props.onClick(props.page)}>
        <PaginationLink>
            {props.page}
        </PaginationLink>
    </PaginationItem>
)

const Paginator = props => {
    const renderFront = () => {
        switch (props.pagesInRange[0]) {
            case 1: return null

            case 2: return <Item page={1} onClick={props.onChange} />

            case 3: return (
                <Fragment>
                    <Item page={1} onClick={props.onChange} />
                    <Item page={2} onClick={props.onChange} />
                </Fragment>
            )

            default: return (
                <Fragment>
                    <Item page={1} onClick={props.onChange} />
                    <Pagination.Ellipsis disabled />
                </Fragment>
            )
        }
    }

    const renderMiddle = () => {
        return props.pagesInRange.map(i => {
            return <Item key={i} page={i} onClick={props.onChange} active={i == props.current} />
        })
    }

    const renderEnd = () => {
        const distanceFromEnd = props.last - props.pagesInRange[props.pagesInRange.length - 1]
        switch (distanceFromEnd) {
            case 0: return null

            case 1: return <Item page={props.last} onClick={props.onChange} />

            case 2: return (
                <Fragment>
                    <Item page={props.last - 1} onClick={props.onChange} />
                    <Item page={props.last} onClick={props.onChange} />
                </Fragment>
            )

            default: return (
                <Fragment>
                    {/* <Pagination.Ellipsis disabled /> */}
                    <Item page={props.last} onClick={props.onChange} />
                </Fragment>
            )
        }
    }

    return (
        <div className="text-center">
            <Pagination>
                <PaginationItem onClick={() => props.onChange(props.current - 1)}
                    disabled={props.current === 1}>
                    <PaginationLink>
                        « Previous
                </PaginationLink>
                </PaginationItem>
                {renderFront()}
                {renderMiddle()}
                {renderEnd()}
                <PaginationItem onClick={() => props.onChange(props.current + 1)}
                    disabled={props.current === props.last}>
                    <PaginationLink>
                        Next »
                </PaginationLink>
                </PaginationItem>
            </Pagination>
        </div>
    )
}

export default Paginator