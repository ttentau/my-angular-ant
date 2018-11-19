export const navigation = [
    {
        name: '工作台',
        url: '/workbench',
        icon: 'icon-speedometer',
        badge: {
            variant: 'info',
            // text: 'NEW'
        }
    },
    {
        name: '车辆管理',
        url: '/cars',
        icon: 'fa fa-car fa-lg',
        children: [
          {
            name: '所有车辆',
            url: '/cars/carList',
            icon: 'icon-pencil'
          },
          {
            name: '待审核车辆',
            url: '/cars/audit',
            icon: 'fa fa-server fa-lg'
          }
        ]
    },
    {
        name: '订单管理',
        url: '/orders',
        icon: 'fa fa-reorder fa-lg',
        children: [
            {
                name: '订单统计',
                url: '/orders/statistics',
                icon: 'icon-drop'
            },
            {
                name: '所有订单',
                url: '/orders/allOrder',
                icon: 'fa fa-navicon fa-lg'
            }
        ]
    },
    {
        name: '财务管理',
        url: '/finance',
        icon: 'icon-credit-card'
    },
    {
        name: '租客管理',
        url: '/tenant',
        icon: 'icon-people'
    },
    {
        name: '员工管理',
        url: '/employees',
        icon: 'icon-user'
    },
    {
        name: '公司管理',
        url: '/company',
        icon: 'fa fa-align-justify fa-lg'
    }
];
