export interface navItem {
    title: string,
    path: string,
    listChild: navItem[]
}

export const navItems: navItem[] = [
    {
        title: 'Home',
        path: 'home',
        listChild: []
    },
    {
        title: 'Products',
        path: 'products',
        listChild: [
            {
                title: 'Products',
                path: 'products',
                listChild: []
            }
        ]
    },
    {
        title: 'Resources',
        path: 'resources',
        listChild: [
            {
                title: 'Products',
                path: 'products',
                listChild: []
            }
        ]
    },
    {
        title: 'Pricing',
        path: 'price',
        listChild: [
            {
                title: 'Products',
                path: 'products',
                listChild: []
            }
        ]
    }
]