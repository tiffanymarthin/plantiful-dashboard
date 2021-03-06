import { createSelector } from 'reselect';

const selectOrder = state => state.order;

export const selectAllOrders = createSelector(
    [selectOrder],
    order => order.allOrders
);

export const selectCompletedOrders = createSelector(
    [selectOrder],
    order => order.completedOrders
);

export const selectIncompleteOrders = createSelector(
    [selectOrder],
    order => order.incompleteOrders
);

export const selectCustomers = createSelector(
    [selectOrder],
    order => order.customers
);

export const selectTotalRevenue = createSelector(
    [selectOrder],
    order => order.totalRevenue
);

export const selectTotalSales = createSelector(
    [selectOrder],
    order => order.totalSales
);