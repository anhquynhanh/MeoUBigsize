import dress1_1 from './dress/dress_1.1.jpeg';
import dress1_2 from './dress/dress_1.2.jpeg';
import dress1_3 from './dress/dress_1.3.jpeg';
import dress1_4 from './dress/dress_1.4.jpeg';
import dress2_1 from './dress/dress_2.1.jpeg';
import dress2_2 from './dress/dress_2.2.jpeg';
import dress3_1 from './dress/dress_3.1.jpeg';
import dress3_2 from './dress/dress_3.2.jpeg';
import dress4_1 from './dress/dress_4.1.jpeg';
import dress4_2 from './dress/dress_4.2.jpeg';

import jacket1_1 from './jacket/jacket_1.1.jpeg';
import jacket1_2 from './jacket/jacket_1.2.jpeg';
import jacket2_1 from './jacket/jacket_2.1.jpeg';
import jacket2_2 from './jacket/jacket_2.2.jpeg';
import jacket2_3 from './jacket/jacket_2.3.jpeg';

import set1 from './set/set_1.jpeg';
import set2_1 from './set/set_2.1.jpeg';
import set2_2 from './set/set_2.2.jpeg';
import set3_1 from './set/set_3.1.jpeg';
import set3_2 from './set/set_3.2.jpeg';
import set3_3 from './set/set_3.3.jpeg';
import set4_1 from './set/set_4.1.jpeg';
import set4_2 from './set/set_4.2.jpeg';
import set4_3 from './set/set_4.3.jpeg';
import set5_1 from './set/set_5.1.jpeg';
import set5_2 from './set/set_5.2.jpeg';
import set5_3 from './set/set_5.3.jpeg';
import set5_4 from './set/set_5.4.jpeg';
import set6_1 from './set/set_6.1.jpeg';
import set6_2 from './set/set_6.2.jpeg';

import shirt1_1 from './shirt/shirt_1.1.jpeg';
import shirt1_2 from './shirt/shirt_1.2.jpeg';
import shirt1_3 from './shirt/shirt_1.3.jpeg';
import shirt2_1 from './shirt/shirt_2.1.jpeg';
import shirt2_2 from './shirt/shirt_2.2.jpeg';
import shirt2_3 from './shirt/shirt_2.3.jpeg';
import shirt3_1 from './shirt/shirt_3.1.jpeg';
import shirt3_2 from './shirt/shirt_3.2.jpeg';
import shirt4_1 from './shirt/shirt_4.1.jpeg';
import shirt4_2 from './shirt/shirt_4.2.jpeg';
import shirt4_3 from './shirt/shirt_4.3.jpeg';
import shirt5_1 from './shirt/shirt_5.1.jpeg';
import shirt5_2 from './shirt/shirt_5.2.jpeg';

import skirt1_1 from './skirt/skirt_1.1.jpeg';
import skirt1_2 from './skirt/skirt_1.2.jpeg';
import skirt1_3 from './skirt/skirt_1.3.jpeg';
import skirt2_1 from './skirt/skirt_2.1.jpeg';
import skirt2_2 from './skirt/skirt_2.2.jpeg';
import skirt3_1 from './skirt/skirt_3.1.jpeg';
import skirt3_2 from './skirt/skirt_3.2.jpeg';
import skirt3_3 from './skirt/skirt_3.3.jpeg';
import skirt4_1 from './skirt/skirt_4.1.jpeg';
import skirt4_2 from './skirt/skirt_4.2.jpeg';
import skirt5_1 from './skirt/skirt_5.1.jpeg';
import skirt5_2 from './skirt/skirt_5.2.jpeg';
import skirt6 from './skirt/skirt_6.jpeg';

import pant1_1 from './wideLegPant/pant_1.1.jpeg';
import pant1_2 from './wideLegPant/pant_1.2.jpeg';
import pant1_3 from './wideLegPant/pant_1.3.jpeg';
import pant1_4 from './wideLegPant/pant_1.4.jpeg';
import pant2_1 from './wideLegPant/pant_2.1.jpeg';
import pant2_2 from './wideLegPant/pant_2.2.jpeg';
import pant2_3 from './wideLegPant/pant_2.3.jpeg';
import pant2_4 from './wideLegPant/pant_2.4.jpeg';
import pant3_1 from './wideLegPant/pant_3.1.jpeg';
import pant3_2 from './wideLegPant/pant_3.2.jpeg';

import avatar from './logo/avatar.jpeg';
import searchIcon from './logo/search_icon.png';
import proIcon from './logo/profile_icon.png';
import cartIcon from './logo/cart_icon.png';
import menuIcon from './logo/menu_icon.png';
import dropIcon from './logo/dropdown_icon.png';
import heroImg from './logo/hero.png';

export const assets = {
    avatar,
    searchIcon,
    proIcon,
    cartIcon,
    menuIcon,
    dropIcon,
    heroImg,
}

export const products = [
    {
        _id: 1,
        name: 'Dress 1',
        description: '',
        price: 100,
        image: [dress1_1, dress1_2, dress1_3, dress1_4],
        category: 'Dress',
        subCategory: 'Topwear',
        color: ['Black', 'White', 'Brown', 'Beige'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: true
    },
    {
        _id: 2,
        name: 'Dress 2',
        description: '',
        price: 100,
        image: [dress2_1, dress2_2],
        category: 'Dress',
        subCategory: 'Topwear',
        color: ['Black', 'Red'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 3,
        name: 'Dress 3',
        description: '',
        price: 100,
        image: [dress3_1, dress3_2],
        category: 'Dress',
        subCategory: 'Topwear',
        color: ['Black', 'Red'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 4,
        name: 'Dress 4',
        description: '',
        price: 100,
        image: [dress4_1, dress4_2],
        category: 'Dress',
        subCategory: 'Topwear',
        color: ['Black', 'White'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 5,
        name: 'Jacket 1',
        description: '',
        price: 100,
        image: [jacket1_1, jacket1_2],
        category: 'Jacket',
        subCategory: 'Topwear',
        color: ['Red', 'Pink'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: true
    },
    {
        _id: 6,
        name: 'Jacket 2',
        description: '',
        price: 100,
        image: [jacket2_1, jacket2_2, jacket2_3],
        category: 'Jacket',
        subCategory: 'Topwear',
        color: ['Black', 'white', 'Beige'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 7,
        name: 'Set 1',
        description: '',
        price: 100,
        image: [set1],
        category: 'Set',
        subCategory: 'Outfit',
        color: ['Default'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: true
    },
    {
        _id: 8,
        name: 'Set 2',
        description: '',
        price: 100,
        image: [set2_1, set2_2],
        category: 'Set',
        subCategory: 'Outfit',
        color: ['Black', 'White'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 9,
        name: 'Set 3',
        description: '',
        price: 100,
        image: [set3_1, set3_2, set3_3],
        category: 'Set',
        subCategory: 'Outfit',
        color: ['Black', 'Pink', 'Green'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 10,
        name: 'Set 4',
        description: '',
        price: 100,
        image: [set4_1, set4_2, set4_3],
        category: 'Set',
        subCategory: 'Outfit',
        color: ['Black', 'White', 'Gray'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 11,
        name: 'Set 5',
        description: '',
        price: 100,
        image: [set5_1, set5_2, set5_3, set5_4],
        category: 'Set',
        subCategory: 'Outfit',
        color: ['White', 'Pink', 'Blue', 'Brown'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 12,
        name: 'Set 6',
        description: '',
        price: 100,
        image: [set6_1, set6_2],
        category: 'Set',
        subCategory: 'Outfit',
        color: ['White', 'Black'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 13,
        name: 'Shirt 1',
        description: '',
        price: 100,
        image: [shirt1_1,shirt1_2, shirt1_3],
        category: 'Shirt',
        subCategory: 'Topwear',
        color: ['White', 'Brown', 'Black'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: true
    },
    {
        _id: 14,
        name: 'Shirt 2',
        description: '',
        price: 100,
        image: [shirt2_1,shirt2_2, shirt2_3],
        category: 'Shirt',
        subCategory: 'Topwear',
        color: ['White', 'Black', 'Brown'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 15,
        name: 'Shirt 3',
        description: '',
        price: 100,
        image: [shirt3_1,shirt3_2],
        category: 'Shirt',
        subCategory: 'Topwear',
        color: ['Black', 'White'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 16,
        name: 'Shirt 4',
        description: '',
        price: 100,
        image: [shirt4_1,shirt4_2, shirt4_3],
        category: 'Shirt',
        subCategory: 'Topwear',
        color: ['Black', 'Brown', 'White'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 17,
        name: 'Shirt 5',
        description: '',
        price: 100,
        image: [shirt5_1,shirt5_2],
        category: 'Shirt',
        subCategory: 'Topwear',
        color: ['Black', 'White'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 18,
        name: 'Skirt 1',
        description: '',
        price: 100,
        image: [skirt1_1,skirt1_2, skirt1_3],
        category: 'Skirt',
        subCategory: 'Bottomwear',
        color: ['Black', 'Brown', 'White'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: true
    },
    {
        _id: 19,
        name: 'Skirt 2',
        description: '',
        price: 100,
        image: [skirt2_1,skirt2_2],
        category: 'Skirt',
        subCategory: 'Bottomwear',
        color: ['Black', 'Gray'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 20,
        name: 'Skirt 3',
        description: '',
        price: 100,
        image: [skirt3_1,skirt3_2, skirt3_3],
        category: 'Skirt',
        subCategory: 'Bottomwear',
        color: ['White', 'Black', 'Pink'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 21,
        name: 'Skirt 4',
        description: '',
        price: 100,
        image: [skirt4_1,skirt4_2],
        category: 'Skirt',
        subCategory: 'Bottomwear',
        color: ['White', 'Black'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 22,
        name: 'Skirt 5',
        description: '',
        price: 100,
        image: [skirt5_1,skirt5_2],
        category: 'Skirt',
        subCategory: 'Bottomwear',
        color: ['Black', 'Gray'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 23,
        name: 'Skirt 6',
        description: '',
        price: 100,
        image: [skirt6],
        category: 'Skirt',
        subCategory: 'Bottomwear',
        color: 'White',
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 24,
        name: 'Pant 1',
        description: '',
        price: 100,
        image: [pant1_1,pant1_2, pant1_3, pant1_4],
        category: 'Pant',
        subCategory: 'Bottomwear',
        color: ['Pink', 'Olive green', 'Black', 'Beige'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: true
    },
    {
        _id: 25,
        name: 'Pant 2',
        description: '',
        price: 100,
        image: [pant2_1,pant2_2, pant2_3, pant2_4],
        category: 'Pant',
        subCategory: 'Bottomwear',
        color: ['Black', 'Gray', 'Brown', 'Beige'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
    {
        _id: 26,
        name: 'Pant 3',
        description: '',
        price: 100,
        image: [pant3_1,pant3_2],
        category: 'Pant',
        subCategory: 'Bottomwear',
        color: ['Black', 'Gray'],
        sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
        bestseller: false
    },
]