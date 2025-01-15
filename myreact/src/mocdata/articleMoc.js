import { Link } from "react-router-dom"
import styled from "styled-components"

export const ArticleMoc =[
    {
        id: 1,
        article: {
            photo: 'https://plus.unsplash.com/premium_photo-1700151911091-dc4842950ead?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            date: 'January 3, 2023',
            title: 'How to prepare a delicious gluten free sushi'
        },
    },
    {
        id: 2,
        article: {
            photo: 'https://plus.unsplash.com/premium_photo-1673164900491-7a2d0853c454?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJlcGFyaW5nJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D',
            date: 'January 3, 2023',
            title: 'Exclusive baking lessons from the pastry king'
        },
    },
    {
        id: 3,
        article: {
            photo: 'https://images.unsplash.com/photo-1534803266547-553ed8fd9861?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByZXBhcmluZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            date: 'January 3, 2023',
            title: 'How to prepare the perfect fries in an air fryer'
        },
    },
    {
        id: 4,
        article: {
            photo: 'https://images.unsplash.com/photo-1610913948701-42071d6a1df5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByZXBhcmluZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            date: 'January 3, 2023',
            title: 'How to prepare a delicious gluten free sushi'
        },
    },
    {
        id: 5,
        article: {
            photo: 'https://images.unsplash.com/photo-1610913729917-ae84429e28f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByZXBhcmluZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            date: 'January 3, 2023',
            title: '5 great cooking gadgets you can buy to save time'
        },
    },
    {
        id: 6,
        article: {
            photo: 'https://plus.unsplash.com/premium_photo-1673164900174-72213bf12f21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByZXBhcmluZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            date: 'January 3, 2023',
            title: 'The secret tips & tricks to prepare a perfect burger'
        },
    },
    {
        id: 7,
        article: {
            photo: 'https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHByZXBhcmluZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            date: 'January 3, 2023',
            title: '7 delicious cheesecake recipes you can prepare'
        },
    },
    {
        id: 8,
        article: {
            photo: 'https://plus.unsplash.com/premium_photo-1700151911091-dc4842950ead?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            date: 'January 3, 2023',
            title: '5 great cooking gadgets you can buy to save time'
        },
    },
    {
        id: 9,
        article: {
            photo: 'https://images.unsplash.com/photo-1641638148267-6b157a285fd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHByZXBhcmluZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            date: 'January 3, 2023',
            title: '5 great cooking gadgets you can buy to save time'
        },
    },
    {
        id: 10,
        article: {
            photo: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHByZXBhcmluZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            date: 'January 3, 2023',
            title: 'How to prepare a delicious gluten free sushi'
        },
    },
    {
        id: 11,
        article: {
            photo: 'https://images.unsplash.com/photo-1531689402913-90f1045d1c61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHByZXBhcmluZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            date: 'January 3, 2023',
            title: 'Top 20 simple and quick desserts for kids'
        },
    },
    {
        id: 12,
        article: {
            photo: 'https://images.unsplash.com/photo-1586852855256-470372be1541?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHByZXBhcmluZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            date: 'January 3, 2023',
            title: 'Top 20 simple and quick desserts for kids'
        },
    },
]
