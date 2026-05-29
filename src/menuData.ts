import vegAppetizerImg from './assets/images/veg_appetizer_platter_1779431979596.png';
import nonVegAppetizerImg from './assets/images/non_veg_appetizer_platter_1779432110596.png';

export interface MenuItem {
  title: string;
  price: string;
  desc: string;
  img: string;
  subcategory?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

export const menuSections: MenuSection[] = [
  {
    id: 'appetizers',
    title: 'Appetizers',
    items: [
      {
        title: 'Vegetable Samosa',
        price: '$5.99',
        desc: 'Savory pastry stuffed with potatoes, peas, onions, and Indian spices. Served with green and sweet chutney.',
        img: 'https://i.pinimg.com/1200x/3e/e1/97/3ee1979f9c1f40e7d2f8015490645896.jpg',
        subcategory: 'VEG APPETIZERS'
      },
      {
        title: 'Aloo Tikki',
        price: '$5.99',
        desc: 'Crispy potato patty made with Indian spices. Served with green and sweet chutney.',
        img: 'https://i.pinimg.com/736x/cd/ac/47/cdac472d33bdc8422b4024c5b1afce45.jpg',
        subcategory: 'VEG APPETIZERS'
      },
      {
        title: 'Paneer Pakora',
        price: '$10.99',
        desc: 'Batter-fried Indian cottage cheese stuffed with green chutney.',
        img: 'https://i.pinimg.com/1200x/ee/bd/13/eebd136985d96eeeae8a718831a73dca.jpg',
        subcategory: 'VEG APPETIZERS'
      },
      {
        title: 'Mixed Veg Pakora',
        price: '$7.99',
        desc: 'Batter-fried assorted vegetables. Served with green and sweet chutney.',
        img: 'https://i.pinimg.com/1200x/b1/b0/37/b1b037bb1131982277365eda2f63ba85.jpg',
        subcategory: 'VEG APPETIZERS'
      },
      {
        title: 'Veg Appetizer Platter',
        price: '$17.99',
        desc: 'Mix veg pakora / Paneer pakora / Vegetable Samosa. Assortment of vegetarian delights including crispy pakoras, samosas, paneer bites, and chaats. Served with chutneys.',
        img: vegAppetizerImg,
        subcategory: 'VEG APPETIZERS'
      },
      {
        title: 'Paneer Bhurji',
        price: '$12.99',
        desc: 'Made with crumbled Indian cottage cheese (paneer) sautéed with onions, tomatoes, ginger, garlic, and fresh ground spices for a rich and hearty taste.',
        img: 'https://i.pinimg.com/736x/c3/7e/3d/c37e3dd8216fec84278387616b7b3876.jpg',
        subcategory: 'VEG APPETIZERS'
      },
      {
        title: 'Hara Bhara Kabab',
        price: '$7.99',
        desc: 'Nutritious and crispy vegetarian patties made from a healthy, vibrant mix of spinach, green peas, potatoes, and aromatic herbs, served with green chutney.',
        img: 'https://i.pinimg.com/736x/bf/5b/78/bf5b78a38806adce9d819bfd36433648.jpg',
        subcategory: 'VEG APPETIZERS'
      },
      {
        title: 'Amritsari Fish Pakora',
        price: '$9.99',
        desc: 'Gram flour–coated fish fritters, deep-fried.',
        img: 'https://i.pinimg.com/736x/57/ab/79/57ab79fd7b9c35982948e19a34dfbee4.jpg',
        subcategory: 'NON VEG APPETIZERS'
      },
      {
        title: 'Non Veg Appetizer Platter',
        price: '$21.99',
        desc: 'Chilli chicken / Chicken seekh kabab / Chicken pakora skewer. Mix of flavorful non-vegetarian starters such as chicken pakoras, kebabs, and skewers. Served with chutneys and sauces.',
        img: nonVegAppetizerImg,
        subcategory: 'NON VEG APPETIZERS'
      },
      {
        title: 'Egg Bhurji',
        price: '$12.99',
        desc: 'A savory Indian-style scrambled egg dish cooked with finely chopped onions, tomatoes, green chilies, fresh coriander, and a blend of flavorful everyday spices.',
        img: 'https://i.pinimg.com/736x/c9/2c/66/c92c6613f48f2e0ae2c59b30756a403b.jpg',
        subcategory: 'NON VEG APPETIZERS'
      },
      {
        title: 'Chilli Fish',
        price: '$9.99',
        desc: 'Fish chunks sautéed in spicy gravy of ginger, garlic, red chilies, onions, and spices.',
        img: 'https://i.pinimg.com/736x/fb/e7/0a/fbe70a2d441d8e7d51314fb01d996afe.jpg',
        subcategory: 'NON VEG APPETIZERS'
      },
      {
        title: 'Chilli Chicken',
        price: '$9.99',
        desc: 'Boneless chicken chunks sautéed in gravy of ginger, garlic, bell peppers, onions, and spices.',
        img: 'https://i.pinimg.com/736x/57/0e/fe/570efeef8f6064530581266d73d13252.jpg',
        subcategory: 'NON VEG APPETIZERS'
      },
      {
        title: 'Chicken 65',
        price: '$9.99',
        desc: 'Boneless chicken chunks sautéed in gravy of ginger, garlic, red chilies, curry leaves, and spices.',
        img: 'https://i.pinimg.com/736x/e6/45/3d/e6453d84f4b216684ae078b4e30ae53e.jpg',
        subcategory: 'NON VEG APPETIZERS'
      }
    ]
  },
  {
    id: 'chaat-corner',
    title: 'Chaat Corner',
    items: [
      {
        title: 'Dahi Bhalla',
        price: '$7.99',
        desc: 'Bhallas are deep fried lentil fritters dunked into creamy yogurt, topped with assorted chutneys.',
        img: 'https://i.pinimg.com/1200x/94/df/51/94df513fa9e37e75f1dc581392a29085.jpg'
      },
      {
        title: 'Dahi Papdi Chaat',
        price: '$7.99',
        desc: 'Crispy dough wafers are topped with tangy, sweet and green chutney along with indian masale, cucumbers, chickpeas, onions and yogurt.',
        img: 'https://i.pinimg.com/736x/2d/52/65/2d52653530be199f32109366ac357172.jpg'
      },
      {
        title: 'Samosa Chaat',
        price: '$7.99',
        desc: 'Samosas are served with tangy chickpea curry, yogurt, green chutney and sweet chutney.',
        img: 'https://i.pinimg.com/736x/b6/55/b1/b655b1c671ef4ce2dff55625487269f0.jpg'
      },
      {
        title: 'Aloo Tikki Chaat',
        price: '$7.99',
        desc: 'Crispy potato patties are topped with yogurt, chickpeas curry, green chutney and sweet chutney.',
        img: 'https://i.pinimg.com/1200x/91/c5/a6/91c5a6891517bf75782948d54cc32344.jpg'
      },
      {
        title: 'Bhel Puri',
        price: '$7.99',
        desc: 'Crispy puffed rice tossed with onions, tomatoes, roasted peanuts, sev, spices, sweet and green chutney.',
        img: 'https://i.pinimg.com/1200x/d2/79/1a/d2791a4c959cc82abcab9fde3e5b31f2.jpg'
      },
      {
        title: 'Pani Puri',
        price: '$8.99',
        desc: 'These are small, round, hollow balls served with potatoes, chickpeas and tangy and spicy water.',
        img: 'https://i.pinimg.com/736x/17/2d/b4/172db49a75a9dde8d16dc326e612af66.jpg'
      },
      {
        title: 'Chana Bhatura',
        price: '$9.99',
        desc: 'Chickpea curry served with deep fried Indian bread along with onion and pickle on the side.',
        img: 'https://i.pinimg.com/webp85/1200x/7f/06/05/7f060524ae0644bc28a83d69884e0013.webp'
      },
      {
        title: 'Pav Bhaji',
        price: '$10.99',
        desc: "It's a mashed, tangy vegetable gravy made from potatoes, carrots, bell peppers and cauliflower, served with buns on the side.",
        img: 'https://i.pinimg.com/736x/8d/e7/0d/8de70d577905b82f0ebdca27381dbc58.jpg'
      },
      {
        title: 'Vada Pav',
        price: '$10.99',
        desc: "It's like a spicy potato fritter sandwich with spicy garlic chutney, super popular in Mumbai.",
        img: 'https://i.pinimg.com/1200x/e7/ba/a1/e7baa1edda4e7f89c8357d5d1b5e1b49.jpg'
      },
      {
        title: 'Aloo Puri',
        price: '$7.99',
        desc: 'A classic Indian comfort meal featuring a flavorful, spiced potato curry served alongside fluffy, deep-fried bread.',
        img: 'https://i.pinimg.com/1200x/77/a3/f2/77a3f2c5e59175a26841e5420b3e6f24.jpg'
      },
      {
        title: 'Palak Patta Chaat',
        price: '$7.99',
        desc: 'Crispy, batter-fried spinach leaves drizzled with sweet tamarind chutney, spicy green chutney, and creamy yogurt.',
        img: 'https://i.pinimg.com/1200x/34/38/37/3438376d67ca3479ff757108fb092655.jpg'
      },
      {
        title: 'Chana Puri',
        price: '$7.99',
        desc: 'Chickpea curry served with poori is formed into small, flat rounds of dough.',
        img: 'https://i.pinimg.com/webp85/736x/7f/06/05/7f060524ae0644bc28a83d69884e0013.webp'
      }
    ]
  },
  {
    id: 'indo-chinese',
    title: 'Indo Chinese',
    items: [
      {
        title: 'Gobhi Manchurian',
        price: '$10.99',
        desc: 'Indo-Chinese appetizer made with cauliflower in a tangy sauce of soy, vinegar, chili, ginger, and garlic.',
        img: 'https://i.pinimg.com/736x/67/f9/cd/67f9cd8f1a4f182dfe39c7f567b0a1d3.jpg'
      },
      {
        title: 'Chilli Paneer',
        price: '$9.99',
        desc: 'Chili Paneer is a wildly popular Indo-Chinese appetizer. It features crispy, golden-fried cubes of soft paneer tossed in a wok with a sticky, lip-smacking sauce.',
        img: 'https://i.pinimg.com/736x/b5/f2/22/b5f222805f43d8b1a30a48e561aba9a4.jpg'
      },
      {
        title: 'Hakka Noodles',
        price: '$12.99',
        desc: 'These are famous Indo-Chinese style stir-fried noodles made with vegetables, soy sauce and spices.',
        img: 'https://i.pinimg.com/736x/cc/0e/c6/cc0ec678549698920af1632150a0e361.jpg'
      },
      {
        title: 'Chicken Hakka Noodles',
        price: '$13.99',
        desc: 'Wok-tossed noodles stir-fried with tender chicken bites, crisp vegetables, and savory Indo-Chinese sauces.',
        img: 'https://i.pinimg.com/736x/dc/a4/b9/dca4b9f1476906f09432ef91b58274a6.jpg'
      },
      {
        title: 'Schezwan Chicken Hakka Noodles',
        price: '$14.99',
        desc: 'Spicy and flavorful wok-tossed noodles mixed with tender chicken pieces, crunchy vegetables, and a bold, zesty Schezwan sauce.',
        img: 'https://i.pinimg.com/736x/c8/34/e4/c834e4767afd16ac4915a4a55362168e.jpg'
      },
      {
        title: 'Veg Fried Rice',
        price: '$12.99',
        desc: 'Savory wok-tossed rice with fluffy grains, egg, mixed veggies, and classic soy aromatics. A comforting favorite!',
        img: 'https://i.pinimg.com/1200x/1f/7e/a8/1f7ea8e1428dc52cc7825130dd548292.jpg'
      },
      {
        title: 'Chicken Fried Rice',
        price: '$13.99',
        desc: 'A comforting classic featuring seasoned chicken, fluffy fried rice, peas, carrots,and egg, all stir-fried to perfection with a touch of sesame and soy sauce.',
        img: 'https://i.pinimg.com/736x/ad/82/36/ad82368d7d2c7a5a7ac5ff98e9eacbea.jpg'
      },
      {
        title: 'Chicken Schezwan Fried Rice',
        price: '$14.99',
        desc: 'Wok-tossed long-grain rice stir-fried with tender chicken, crunchy veggies, and a fiery Schezwan sauce.',
        img: 'https://i.pinimg.com/736x/49/c4/2c/49c42cb41c36e7c0bb1c347735f9a25f.jpg'
      },
      {
        title: 'Schezwan Hakka Noodles',
        price: '$13.99',
        desc: 'Stir-fried noodles with a bold, spicy kick, loaded with shredded cabbage, carrots, bell peppers, and zesty Schezwan flavors.',
        img: 'https://i.pinimg.com/736x/04/64/e2/0464e2ecb1bf1499f7c35354149aab54.jpg'
      },
      {
        title: 'Schezwan Fried Rice',
        price: '$13.99',
        desc: 'A fiery and aromatic dish of classic wok-tossed rice, perfectly blended with fresh veggies and a spicy Schezwan kick.',
        img: 'https://i.pinimg.com/736x/83/b7/38/83b7381b18940f97d4ec5fe69ae3d023.jpg'
      }
    ]
  },
  {
    id: 'kabab-grill',
    title: 'Kabab & Grill',
    items: [
      {
        title: 'Paneer Achari Tikka',
        price: '$17.99',
        desc: 'Soft paneer cubes marinated in a tangy, bold Indian pickle spice blend and char-grilled to perfection.',
        img: 'https://i.pinimg.com/1200x/b3/a1/34/b3a1347c17362ac9d80e80a11b603642.jpg',
        subcategory: 'VEG KABAB & GRILL'
      },
      {
        title: 'Paneer Malai Tikka',
        price: '$17.99',
        desc: 'Indian starter made from cottage cheese cubes marinated with yogurt, cream, spices, herbs and served with bell peppers onions on the top.',
        img: 'https://i.pinimg.com/736x/22/b6/9f/22b69fffbf435604bf7510226c066162.jpg',
        subcategory: 'VEG KABAB & GRILL'
      },
      {
        title: 'Paneer Tikka',
        price: '$17.99',
        desc: 'Indian cottage cheese marinated in spiced yogurt mixture then roasted with onions and bell peppers.',
        img: 'https://i.pinimg.com/736x/e2/00/22/e200223561ffdf41c5b2d2326cef08e8.jpg',
        subcategory: 'VEG KABAB & GRILL'
      },
      {
        title: 'Tandoori Afghani Chaap',
        price: '$14.99',
        desc: 'Tender vegetarian soya chaap cooked in creamy gravy with bell peppers and onions.',
        img: 'https://i.pinimg.com/736x/23/12/b8/2312b8238bd87078530cc9b376675f37.jpg',
        subcategory: 'VEG KABAB & GRILL'
      },
      {
        title: 'Malai Chaap',
        price: '$14.99',
        desc: 'Tender soya chaap pieces marinated in cream, yogurt, cashew paste and spices then grilled.',
        img: 'https://i.pinimg.com/736x/99/1d/90/991d901a658f71a6709052c884bf546e.jpg',
        subcategory: 'VEG KABAB & GRILL'
      },
      {
        title: 'Vegi Tandoori Platers',
        price: '$21.99',
        desc: 'Choose any 3 items from Veg Kabab & Grill menu.',
        img: 'https://i.pinimg.com/736x/32/2f/b9/322fb98cd67f648e853f7fbee4a17b97.jpg',
        subcategory: 'VEG KABAB & GRILL'
      },
      {
        title: 'Lamb Seekh Kabab',
        price: '$18.99',
        desc: 'Made with Indian spices, skewered and grilled.',
        img: 'https://i.pinimg.com/736x/b5/4e/88/b54e88dfbdce093027d669c2017cfd31.jpg',
        subcategory: 'NON VEG KABAB & GRILL'
      },
      {
        title: 'Garlic Shrimp',
        price: '$16.99',
        desc: 'Shrimp tossed with spices, ginger, garlic, soy sauce and vinegar.',
        img: 'https://i.pinimg.com/webp85/736x/e3/36/76/e336762408e04c14d737f4d0bf013f6f.webp',
        subcategory: 'NON VEG KABAB & GRILL'
      },
      {
        title: 'Chicken Seekh Kabab',
        price: '$18.99',
        desc: 'Ground chicken mixed with Indian spices then grilled.',
        img: 'https://i.pinimg.com/736x/5a/68/1a/5a681a47945a1bd32b6437224bea6f87.jpg',
        subcategory: 'NON VEG KABAB & GRILL'
      },
      {
        title: 'Lamb Chop 4 Pieces',
        price: '$24.99',
        desc: 'Lamb chops marinated in yogurt and spices roasted in oven.',
        img: 'https://i.pinimg.com/1200x/c2/a4/6b/c2a46b08cc0b6656fc7215cfb47d9ee4.jpg',
        subcategory: 'NON VEG KABAB & GRILL'
      },
      {
        title: 'Achari Wings',
        price: '$18.99',
        desc: 'Flavorful chicken wings marinated in tangy achari spices.',
        img: 'https://i.pinimg.com/1200x/65/7d/11/657d11ec665956cbecbd1b1a38c5910c.jpg',
        subcategory: 'NON VEG KABAB & GRILL'
      },
      {
        title: 'Tandoori Non Veg Platter',
        price: '$24.99',
        desc: 'Choose any 3 items from Non Veg Kabab & Grill section.',
        img: 'https://i.pinimg.com/736x/a8/1a/29/a81a2904ee3d4e7d1b8e9262b40a2f5b.jpg',
        subcategory: 'NON VEG KABAB & GRILL'
      },
      {
        title: 'Chicken Malai Tikka',
        price: '$18.99',
        desc: 'Boneless chicken breast marinated with yogurt, cream and cashews then grilled.',
        img: 'https://i.pinimg.com/736x/b9/75/3e/b9753e7a7dcb7e5cc35d7b320f04c521.jpg',
        subcategory: 'NON VEG KABAB & GRILL'
      },
      {
        title: 'Tandoori Wings',
        price: '$18.99',
        desc: 'Juicy chicken wings coated in spicy tandoori marinade.',
        img: 'https://i.pinimg.com/736x/d2/53/c0/d253c0ea82064e9423d3da48bee28305.jpg',
        subcategory: 'NON VEG KABAB & GRILL'
      },
      {
        title: 'Tandoori Chicken (Half)',
        price: '$9.99',
        desc: 'Bone-in chicken marinated in yogurt and aromatic spices roasted in clay oven.',
        img: 'https://i.pinimg.com/736x/0f/cc/0a/0fcc0a1cdbf491859fdc15be3bfcc153.jpg',
        subcategory: 'NON VEG KABAB & GRILL'
      },
      {
        title: 'Tandoori Chicken (Full)',
        price: '$19.99',
        desc: 'Bone-in chicken marinated in yogurt and aromatic spices roasted in clay oven.',
        img: 'https://i.pinimg.com/736x/a0/b9/05/a0b905f69b839f6eb2b4c46221f2b8eb.jpg',
        subcategory: 'NON VEG KABAB & GRILL'
      },
      {
        title: 'Chicken Achari Tikka',
        price: '$18.99',
        desc: 'Boneless chicken chunks marinated in tangy achari spices and yogurt.',
        img: 'https://i.pinimg.com/736x/e0/e7/ba/e0e7bac76f7ef1550aa9c3b4fece3d69.jpg',
        subcategory: 'NON VEG KABAB & GRILL'
      },
      {
        title: 'Tandoori Fish Tikka',
        price: '$17.99',
        desc: 'Fish marinated in yogurt and spices roasted in oven.',
        img: 'https://i.pinimg.com/736x/b5/ae/0a/b5ae0ab233268d4bcd89a38263af455a.jpg',
        subcategory: 'NON VEG KABAB & GRILL'
      }
    ]
  },
  {
    id: 'biryani-rice',
    title: 'Biryani and Rice',
    items: [
      {
        title: 'Zira Rice',
        price: '$5.99',
        desc: 'Long-grain basmati rice, cumin seeds, ghee and whole spices.',
        img: 'https://i.pinimg.com/736x/35/67/89/356789c8c178906a6585d2fcbe27387c.jpg'
      },
      {
        title: 'Vegetable Dum Biryani',
        price: '$13.99',
        desc: 'Flavored basmati rice cooked with vegetables and spices.',
        img: 'https://i.pinimg.com/736x/66/43/66/664366e3d18914b59790c8298bbf494a.jpg'
      },
      {
        title: 'Chicken Dum Biryani',
        price: '$14.99',
        desc: 'Chicken and rice cooked under pressure for rich aroma.',
        img: 'https://i.pinimg.com/736x/ab/3c/13/ab3c13997f8502cab557da2e76efee7f.jpg'
      },
      {
        title: 'Goat Dum Biryani',
        price: '$15.99',
        desc: 'Goat and rice cooked under pressure with spices.',
        img: 'https://i.pinimg.com/736x/16/68/68/16686845115e885a54136765d2612afc.jpg'
      },
      {
        title: 'Lamb Dum Biryani',
        price: '$16.99',
        desc: 'Tender lamb pieces and fragrant basmati rice slow-cooked with saffron and Indian spices.',
        img: 'https://i.pinimg.com/736x/82/09/56/820956674034206c26b4a1d26f9cc6ee.jpg'
      }
    ]
  },
  {
    id: 'veg-entrees',
    title: 'Veg Entrées',
    items: [
      {
        title: 'Chana Masala',
        price: '$14.99',
        desc: 'North Indian-style chickpea curry made with Indian spices, onions and tomatoes.',
        img: 'https://i.pinimg.com/736x/26/4b/ad/264bad3e7e9ffe6599c6b35d5f55ded0.jpg'
      },
      {
        title: 'Shahi Paneer',
        price: '$16.99',
        desc: 'Paneer cooked in rich creamy gravy made from onions, cream and cashews.',
        img: 'https://i.pinimg.com/1200x/61/a9/06/61a9064273bfe58b6bd775be787f11a0.jpg'
      },
      {
        title: 'Bhindi Special',
        price: '$15.99',
        desc: 'Made with okra, ground spices, herbs, onions and tomatoes.',
        img: 'https://i.pinimg.com/1200x/6c/e3/d1/6ce3d1d3b73268b60ef521599b036b16.jpg'
      },
      {
        title: 'Mix Veg Sabji',
        price: '$15.99',
        desc: 'Mixed vegetable sabji made with potatoes, bell peppers, cauliflower, carrots, peas and spices.',
        img: 'https://i.pinimg.com/1200x/d5/65/92/d565926e2875f402f4f7ccf346731616.jpg'
      },
      {
        title: 'Special Saag',
        price: '$15.99',
        desc: 'North Indian style spinach mustard leaves, cabbage, ginger, garlic and onion.',
        img: 'https://i.pinimg.com/1200x/be/4a/ca/be4aca441f04dcc4ee175c7746465c01.jpg'
      },
      {
        title: 'Kadhai Paneer',
        price: '$16.99',
        desc: 'Spicy and tangy paneer dish made with onions, bell peppers and spices.',
        img: 'https://i.pinimg.com/1200x/5a/32/61/5a32615d4e845fd0deebcaef1cc076ee.jpg'
      },
      {
        title: 'Baingan Bhartha',
        price: '$15.99',
        desc: 'Fire-roasted eggplants mashed and cooked with flavorful gravy and spices.',
        img: 'https://i.pinimg.com/736x/b2/14/a4/b214a4f0aae61432e3efc96430a1a71b.jpg'
      },
      {
        title: 'Dal Makhani',
        price: '$15.99',
        desc: 'Slow-cooked whole black lentils, kidney beans and spices for creamy texture.',
        img: 'https://i.pinimg.com/236x/16/a8/8e/16a88e5b5d35140f254c25a87f3d3994.jpg'
      },
      {
        title: 'Tadka Dal',
        price: '$14.99',
        desc: 'Lentil dish made with tuvar dal, onions, tomatoes and spices.',
        img: 'https://i.pinimg.com/1200x/2a/8e/57/2a8e57bc82908377e58203bfd9f95e84.jpg'
      },
      {
        title: 'Malai Kofta',
        price: '$16.99',
        desc: 'Potato and paneer kofta served in creamy gravy.',
        img: 'https://i.pinimg.com/1200x/96/f8/dd/96f8ddabd246a234024406fae60ac8ac.jpg'
      },
      {
        title: 'Palak Paneer',
        price: '$16.99',
        desc: 'Spinach mustard leaves and paneer cooked with ginger, onion and garlic.',
        img: 'https://i.pinimg.com/1200x/13/00/a0/1300a0ac4d8a533bf05bfa148cad85be.jpg'
      },
      {
        title: 'Navrattan Korma',
        price: '$16.99',
        desc: 'Luxury curry dish made with mixed vegetables and dry fruits.',
        img: 'https://i.pinimg.com/736x/03/54/a0/0354a0d4a597f84b3513d06e5eddf107.jpg'
      },
      {
        title: 'Aloo Gobhi',
        price: '$15.99',
        desc: 'Cauliflower and potatoes cooked with onions, tomatoes and spices.',
        img: 'https://i.pinimg.com/736x/d1/c5/0a/d1c50a4b55e421f7c28978b6cc7cda5d.jpg'
      },
      {
        title: 'Matar Paneer',
        price: '$15.99',
        desc: 'Green peas and paneer cubes cooked in onion tomato sauce.',
        img: 'https://i.pinimg.com/736x/93/3a/64/933a64318b1c7ef5d5deb5f4c324f7fc.jpg'
      },
      {
        title: 'Paneer Tikka Masala',
        price: '$16.99',
        desc: 'Fire-roasted paneer simmered in rich creamy tomato gravy.',
        img: 'https://i.pinimg.com/1200x/99/cc/f0/99ccf08d87447800ab143d92d6a7acfe.jpg'
      },
      {
        title: 'Aloo Baingan',
        price: '$14.99',
        desc: 'Traditional curry made with potatoes and eggplant.',
        img: 'https://i.pinimg.com/1200x/dd/74/83/dd7483aa86b024623e9e5d2c35192c73.jpg'
      },
      {
        title: 'Punjabi Kadi',
        price: '$15.99',
        desc: 'Tangy yogurt gram flour curry with pakoras.',
        img: 'https://i.pinimg.com/webp85/1200x/73/a5/4b/73a54bb33f4d8ecb041508919f2dc825.webp'
      },
      {
        title: 'Mashroom Masala',
        price: '$15.99',
        desc: 'Button mushrooms cooked in onion tomato gravy with Indian spices.',
        img: 'https://i.pinimg.com/736x/b9/96/86/b9968667d8dfff98b7315d209bbdfea6.jpg'
      }
    ]
  },
  {
    id: 'nonveg-entrees',
    title: 'Non Veg Entrées',
    items: [
      {
        title: 'Chicken Curry',
        price: '$17.99',
        desc: 'This is one of the most popular Indian delicacies, traditionally made with chicken, herbs and a mélange of spices.',
        img: 'https://i.pinimg.com/1200x/4e/d5/62/4ed562ee0c0319f7b353d2f8382c638d.jpg'
      },
      {
        title: 'Goat Curry',
        price: '$18.99',
        desc: 'Goat curry is made with small pieces of goat, slow-cooked in a gravy of onions, tomatoes, ginger and garlic.',
        img: 'https://i.pinimg.com/736x/51/14/43/51144306d01edccf668f3be1817ea378.jpg'
      },
      {
        title: 'Shahi Chicken Korma',
        price: '$17.99',
        desc: "It's a traditional Mughlai dish cooked with cashews and other dry fruits.",
        img: 'https://i.pinimg.com/736x/9f/05/40/9f054038720d375638c522367ca18ece.jpg'
      },
      {
        title: 'Saag Ghosht',
        price: '$18.99',
        desc: 'Saag Ghosht is a flavorful dish where lamb and spinach are cooked together in a creamy gravy with a rich blend of spices.',
        img: 'https://i.pinimg.com/1200x/09/97/79/099779b632c3a77f927fd66bd9468529.jpg'
      },
      {
        title: 'Rogan Josh',
        price: '$18.99',
        desc: 'This dish is made with red meat, flavored primarily with blended spices and Kashmiri chilies.',
        img: 'https://i.pinimg.com/736x/49/42/3d/49423d252d82ffcbd070b47b766ff051.jpg'
      },
      {
        title: 'Kadhai Lamb',
        price: '$18.99',
        desc: 'This delicious dish is prepared by cooking lamb with flavorful spices, ginger-garlic paste and onion paste.',
        img: 'https://i.pinimg.com/1200x/50/8c/63/508c638c63a725c9d660450afcbb3529.jpg'
      },
      {
        title: 'Fish Curry',
        price: '$17.99',
        desc: 'Small fish pieces is sautéed with onions, ginger, garlic, tomatoes and ground spices.',
        img: 'https://i.pinimg.com/736x/f6/e8/31/f6e8316a80c7e683ebf9aa2abba7f101.jpg'
      },
      {
        title: 'Prawn Curry',
        price: '$17.99',
        desc: 'Made with fresh prawns, onions, tomatoes and ground spices.',
        img: 'https://i.pinimg.com/736x/d3/4f/7a/d34f7a928941a4a92bd5170261b9af50.jpg'
      },
      {
        title: 'Chicken Tikka Masala',
        price: '$17.99',
        desc: 'This curry is made with chicken breast, ground spices, onions, tomatoes, cream and herbs.',
        img: 'https://i.pinimg.com/736x/70/be/0d/70be0d9b0a0b238464701991128f01f3.jpg'
      },
      {
        title: 'Kadhai Chicken',
        price: '$17.99',
        desc: 'Tender chicken cooked in a traditional Indian wok with a spicy tomato gravy, crunchy bell peppers, and freshly ground roasted spices.',
        img: 'https://i.pinimg.com/736x/37/70/03/37700343256c7eb6526514d2a13cc194.jpg'
      },
      {
        title: 'Chicken Do Pyaza',
        price: '$17.99',
        desc: 'A rich and hearty chicken curry simmered in savory spices with a generous, double portion of caramelized and diced onions.',
        img: 'https://i.pinimg.com/1200x/5a/82/d9/5a82d94dea6fc257cb7f9127d1b9b1ca.jpg'
      },
      {
        title: 'Butter Chicken',
        price: '$17.99',
        desc: 'Chicken Makhani, also known as Butter Chicken. Is made with chicken pieces cooked in an aromatic butter sauce.',
        img: 'https://i.pinimg.com/736x/0b/fc/ab/0bfcab4f16e047f2b477687edf615723.jpg'
      },
      {
        title: 'Chicken Saag',
        price: '$17.99',
        desc: 'Chicken Saag is a classic Indian dish made with chicken, fresh spinach, and an array of spices.',
        img: 'https://i.pinimg.com/1200x/17/d4/e0/17d4e043a701c30f00d68849e25d5220.jpg'
      }
    ]
  },
  {
    id: 'wraps',
    title: 'Wraps',
    items: [
      {
        title: 'Paneer Wrap',
        price: '$12.99',
        desc: 'Flavorful, spiced paneer cubes wrapped in a warm flatbread with crisp onions and tangy mint chutney.',
        img: 'https://i.pinimg.com/736x/44/3e/3e/443e3eb28ee9315ab961787df489e30d.jpg'
      },
      {
        title: 'Chicken Wrap',
        price: '$13.99',
        desc: 'Juicy, marinated chicken chunks wrapped tightly with crunchy veggies and delicious sauces in a toasted flatbread.',
        img: 'https://i.pinimg.com/736x/1c/e7/eb/1ce7eb197e8bbed788cf5ecceebcb973.jpg'
      },
      {
        title: 'Veggie Wrap',
        price: '$11.99',
        desc: 'A wholesome and fresh blend of seasoned mixed vegetables, greens, and savory sauces rolled in a soft wrap.',
        img: 'https://i.pinimg.com/webp85/1200x/7f/79/8b/7f798ba5d873ffabc720fb0932d661a5.webp'
      }
    ]
  },
  {
    id: 'breads',
    title: 'Breads',
    items: [
      {
        title: 'Lachha Parantha',
        price: '$3.99',
        desc: 'Crispy, flaky, multi-layered Indian flatbread made from whole wheat flour and pan-fried with ghee or oil.',
        img: 'https://i.pinimg.com/1200x/60/9c/8f/609c8fcab82b7dffebaf4041b456ad7c.jpg'
      },
      {
        title: 'Tandoori Roti',
        price: '$3.99',
        desc: 'Flatbread made with whole wheat flour and traditionally cooked in a clay oven.',
        img: 'https://i.pinimg.com/1200x/5c/f0/e2/5cf0e280a1f58cf63e10afafaf8df1b1.jpg'
      },
      {
        title: 'Makki Ki Roti',
        price: '$2.99',
        desc: 'Flatbread made with corn flour traditionally cooked on a pan.',
        img: 'https://i.pinimg.com/736x/0f/35/12/0f3512ccef6a7a196ce3c1d7adfcfea2.jpg'
      },
      {
        title: 'Butter Naan',
        price: '$3.99',
        desc: 'Traditional plain naan bread with butter on top.',
        img: 'https://i.pinimg.com/736x/1c/a6/c1/1ca6c100275644142a7e9efb099a59da.jpg'
      },
      {
        title: 'Paneer Naan',
        price: '$4.99',
        desc: 'Naan stuffed with paneer along with spices.',
        img: 'https://i.pinimg.com/736x/33/5d/e6/335de6d7ed58d8ff4e4a5f8fa4fa4f69.jpg'
      },
      {
        title: 'Garlic Naan',
        price: '$4.99',
        desc: 'Coated with garlic butter on top and cooked in traditional oven.',
        img: 'https://i.pinimg.com/1200x/95/56/8d/95568da9b4500560dad637befc47d270.jpg'
      },
      {
        title: 'Bullet Naan',
        price: '$4.99',
        desc: 'Spicy traditional naan stuffed with jalapeños, cilantro and spices.',
        img: 'https://i.pinimg.com/736x/b0/29/28/b0292850df5680d6b7a4b12e9b94c08b.jpg'
      },
      {
        title: 'Keema Naan',
        price: '$5.99',
        desc: 'Perfect combination of spiced ground lamb filling and soft fluffy dough.',
        img: 'https://i.pinimg.com/1200x/06/ba/30/06ba301c873d7016d35e31e28d745021.jpg'
      },
      {
        title: 'Kashmiri Naan',
        price: '$4.99',
        desc: 'Flaky naan stuffed with dry fruits.',
        img: 'https://i.pinimg.com/1200x/3e/c4/cb/3ec4cbb91c89afaa5716fd1bbc3fda62.jpg'
         },
      {
        title: 'Bread Basket',
        price: '$10.99',
        desc: 'Includes butter naan, lachha paratha and garlic naan.',
        img: 'https://i.pinimg.com/736x/cf/37/02/cf3702ba16e9ccb790a6c5abe1b899c5.jpg'
      },
      {
        title: 'Amritsari Kulcha',
        price: '$5.99',
        desc: 'Crispy outside and soft inside stuffed with potatoes, paneer and spices.',
        img: 'https://i.pinimg.com/1200x/21/91/3d/21913d59fe47573c02125b3f2614e3f8.jpg'
      },
      {
        title: 'Tandoori Aloo Parantha',
        price: '$5.99',
        desc: 'Stuffed with mashed potatoes and cooked in tandoor.',
        img: 'https://i.pinimg.com/736x/87/95/42/879542e6384ea3904b9fd95d69f30a94.jpg'
      },
      {
        title: 'Tandoori Mix Parantha',
        price: '$5.99',
        desc: 'Stuffed with mashed mixed vegetables and spices.',
        img: 'https://i.pinimg.com/1200x/ce/2f/68/ce2f681f9137011944a5760d187e6344.jpg'
      },
      {
        title: 'Paneer Parantha',
        price: '$4.99',
        desc: 'Soft traditional flatbread stuffed with mildly spiced onions and cilantro.',
        img: 'https://i.pinimg.com/1200x/87/94/ef/8794ef235aa1d2641da0ebee7e6672a4.jpg'
      },
      {
        title: 'Plain Naan',
        price: '$5.99',
        desc: 'Flaky pan-fried whole wheat flatbread stuffed with savory paneer filling.',
        img: 'https://i.pinimg.com/1200x/bf/05/39/bf0539781d3e2f12441216a01122d2d7.jpg'
      },
      {
        title: 'Onion Kulcha',
        price: '$3.99',
        desc: 'Soft blistered leavened flatbread baked fresh in traditional clay tandoor.',
        img: 'https://i.pinimg.com/736x/19/0d/6c/190d6cd291fadf15ccb1cabedfc20f36.jpg'
      },
      {
        title: 'Cheese Naan',
        price: '$5.99',
        desc: 'Soft fluffy tandoor-baked flatbread stuffed with melted cheese.',
        img: 'https://i.pinimg.com/1200x/16/62/fd/1662fd3063589eaa23982f233c7fa9a2.jpg'
      }
    ]
  },
  {
    id: 'bowls',
    title: 'Bowls',
    items: [
      {
        title: 'Tandoori Chicken With Rice & Salad',
        price: '$15.99',
        desc: 'Smoky tandoori chicken served with basmati rice and salad.',
        img: 'https://i.pinimg.com/webp85/1200x/eb/5f/74/eb5f74a5d40f6aeb809fca339a35c597.webp'
      },
      {
        title: 'Chicken Achari Tikka With Rice & Salad',
        price: '$15.99',
        desc: 'Tangy achari chicken bowl served with rice and crisp salad.',
        img: 'https://i.pinimg.com/736x/f0/1b/85/f01b85f512ec1c9ec60735bd5a35e4de.jpg'
      },
      {
        title: 'Chicken Seekh Kabab With Rice & Salad',
        price: '$15.99',
        desc: 'Spiced chicken kabab served with fragrant rice and garden shadow-salad.',
        img: 'https://i.pinimg.com/736x/97/b6/0c/97b60c511a15df74157fd7d44e98ee11.jpg'
      },
      {
        title: 'Lamb Seekh Kabab With Rice & Salad',
        price: '$15.99',
        desc: 'Premium minced lamb kabab served with basmati rice and fresh garden salad.',
        img: 'https://i.pinimg.com/736x/41/d6/26/41d62607d44971b5aeb62625efc044b1.jpg'
      },
      {
        title: 'Fish Tikka With Rice & Salad',
        price: '$15.99',
        desc: 'Flaky fish tikka medallions served over flavored rice with salad.',
        img: 'https://i.pinimg.com/736x/1c/a3/e8/1ca3e8610b46804293fb54bea151bd10.jpg'
      },
      {
        title: 'Paneer Malai Tikka With Rice & Salad',
        price: '$15.99',
        desc: 'Creamy mild marinated cottage cheese chunks served with rice and salad.',
        img: 'https://i.pinimg.com/1200x/7b/86/c9/7b86c9b8db39509480cafedfb8267d58.jpg'
      },
      {
        title: 'Paneer Achari Tikka With Rice & Salad',
        price: '$15.99',
        desc: 'Tangy achari paneer pieces served with rice and custom salad.',
        img: 'https://i.pinimg.com/736x/ab/ca/c9/abcac95281659f86717135c63c9a1055.jpg'
      }
    ]
  },
  {
    id: 'kids-menu',
    title: "Kid's Menu",
    items: [
      {
        title: 'Shahi Paneer with Naan/Rice',
        price: '$11.99',
        desc: 'Shahi paneer served with plain butter naan or rice.',
        img: 'https://i.pinimg.com/1200x/c3/42/35/c342353a7448925af3dbab39b882c422.jpg'
      },
      {
        title: 'Butter Chicken with Naan/Rice',
        price: '$12.99',
        desc: 'Butter chicken served with plain butter naan or rice.',
        img: 'https://i.pinimg.com/736x/74/4c/71/744c71e4d8386301a374de46672dbe8a.jpg'
      }
    ]
  },
  {
    id: 'salad',
    title: 'Salad',
    items: [
      {
        title: 'Chicken Salad',
        price: '$14.99',
        desc: 'Includes tandoori chicken pieces mixed with vegetables.',
        img: 'https://i.pinimg.com/736x/b3/52/6d/b3526d253d74612a71055a313a5bfe65.jpg'
      },
      {
        title: 'Mix Salad',
        price: '$6.99',
        desc: 'Contains cucumbers, carrots, onions, tomatoes and lemon.',
        img: 'https://i.pinimg.com/736x/8c/24/3c/8c243cc8e49925b96f1cac71cd39de6d.jpg'
      }
    ]
  },
  {
    id: 'soups',
    title: 'Soups',
    items: [
      {
        title: 'Dal Lentil Soup',
        price: '$6.99',
        desc: 'Indian lentil soup bursting with flavor and delicious taste.',
        img: 'https://i.pinimg.com/236x/b4/0c/c3/b40cc3675e40ad093d8bea6d9186b05f.jpg'
      },
      {
        title: 'Coconut Tomato Rasam',
        price: '$6.99',
        desc: 'Sweet sour stock made from coconut tamarind, tomato, lentil and spices.',
        img: 'https://i.pinimg.com/736x/d3/20/4e/d3204e0d635502e7df94990f9c907b7e.jpg'
      },
      {
        title: 'Tomato Basil Soup',
        price: '$6.99',
        desc: 'Creamy soup prepared with ripe tomatoes, basil leaves and herbs.',
        img: 'https://i.pinimg.com/1200x/cc/75/b8/cc75b8dc75e44eb785e14e2a0caedebf.jpg'
      }
    ]
  },
  {
    id: 'tacos',
    title: 'Tacos',
    items: [
      {
        title: 'Chicken Tacos',
        price: '$11.99',
        desc: 'Two tacos filled with flavorful chicken pieces and vegetables topped with fresh garnishes.',
        img: 'https://i.pinimg.com/1200x/99/44/38/9944381e528ac0574f58d97023eb223c.jpg'
      },
      {
        title: 'Paneer Tacos',
        price: '$10.99',
        desc: 'Tangy paneer served in tacos with fresh salad and sauces.',
        img: 'https://i.pinimg.com/1200x/bb/7e/a6/bb7ea6da3978d413d59282b0ec05e9cc.jpg'
      }
    ]
  },
  {
    id: 'extras',
    title: 'Extras',
    items: [
      {
        title: 'Plain Dahi',
        price: '$4.99',
        desc: 'Plain yogurt without sugar or salt.',
        img: 'https://i.pinimg.com/1200x/7b/82/51/7b8251f15a271dc196009f14b7a77126.jpg'
      },
      {
        title: 'Mix Veg Raita',
        price: '$5.99',
        desc: 'Yogurt served with cucumbers, tomatoes and onions.',
        img: 'https://i.pinimg.com/1200x/24/6a/f2/246af25dcc9842f8dba48eaa2a9caa90.jpg'
      },
      {
        title: 'Boondi Raita',
        price: '$5.99',
        desc: 'Indian style raita made with yogurt, gram flour balls and spices.',
        img: 'https://i.pinimg.com/1200x/95/0f/f2/950ff2667101ba9800f6662643fe9c0b.jpg'
      },
      {
        title: 'Pickle',
        price: '$2.99',
        desc: 'Made from variety of vegetables by pickling process.',
        img: 'https://i.pinimg.com/236x/70/d7/81/70d781cfeae646bed18dc65ab4a4f88b.jpg'
      },
      {
        title: 'Papadum',
        price: '$4.99',
        desc: 'Thin crispy Indian wafers made from seasoned lentil flour.',
        img: 'https://i.pinimg.com/1200x/7f/75/6b/7f756b24abb992d779d0f7f89d43c9fe.jpg'
      }
    ]
  },
  {
    id: 'burgers',
    title: 'Burgers',
    items: [
      {
        title: 'Aloo Tikki Burger',
        price: '$13.99',
        desc: 'Crispy spiced potato patty served with coleslaw in soft bun with mint chutney. Served with French Fries.',
        img: 'https://i.pinimg.com/736x/a5/5f/ed/a55fede1941146c4ed45c7eff97cd8c9.jpg'
      },
      {
        title: 'Paneer Tikka Burger',
        price: '$14.99',
        desc: 'Grilled paneer served with coleslaw in bun with mint chutneys. Served with French Fries.',
        img: 'https://i.pinimg.com/736x/6c/ad/a8/6cada8a92c3b7c94c0a6c2e24f75b703.jpg'
      },
      {
        title: 'Chicken Tikka Burger',
        price: '$15.99',
        desc: 'Juicy chicken tikka pieces served with coleslaw in bun with mint chutney. Served with French Fries.',
        img: 'https://i.pinimg.com/736x/fe/e1/45/fee145d77d9c8a32faf75adaa849750e.jpg'
      }
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      {
        title: 'Pista Kulfi',
        price: '$7.99',
        desc: 'Pistachio-flavored kulfi made with milk, sugar and dry fruits.',
        img: 'https://i.pinimg.com/736x/ed/74/30/ed7430ead87682cfb7b100d1bbb02f49.jpg'
      },
      {
        title: 'Rasmalai',
        price: '$8.99',
        desc: 'Soft cheese dumplings soaked in creamy saffron milk topped with nuts.',
        img: 'https://i.pinimg.com/1200x/79/e7/5e/79e75ecc2adedf085c3e63a969d4f5a3.jpg'
      },
      {
        title: 'Falooda Ice Cream',
        price: '$7.99',
        desc: 'Rose-flavored frozen dessert loaded with falooda sev and basil seeds.',
        img: 'https://i.pinimg.com/1200x/ea/24/80/ea24802297456f2db3f93da358e9b1dc.jpg'
      },
      {
        title: 'Gulaab Jamun 2 Pieces',
        price: '$4.99',
        desc: 'Indian dessert of fried dough balls soaked in sugar syrup.',
        img: 'https://i.pinimg.com/1200x/2c/a6/aa/2ca6aacbe6532841f3564afe00c588f3.jpg'
      },
      {
        title: 'Gajar Ka Halwa',
        price: '$7.99',
        desc: 'Indian-style carrot pudding rich in dry fruits.',
        img: 'https://i.pinimg.com/1200x/9b/95/7c/9b957c0cbf73f85a5694d8019b090c82.jpg'
      },
      {
        title: 'Gulaab Jamun Kheer',
        price: '$7.99',
        desc: 'Combination of rice pudding and gulab jamuns.',
        img: 'https://i.pinimg.com/736x/41/77/92/4177920dbd75f39879704d84f9458473.jpg'
      },
      {
        title: 'Brownie Ice Cream',
        price: '$7.99',
        desc: 'Hot chocolate brownies swirled into vanilla ice cream.',
        img: 'https://i.pinimg.com/736x/b7/bb/e9/b7bbe92146f3655e90a8187f3a611406.jpg'
      },
      {
        title: 'Khoya Kulfi',
        price: '$7.99',
        desc: 'Indian-style ice cream made with milk.',
        img: 'https://i.pinimg.com/736x/33/a4/cb/33a4cb0b56bccabcc118a0b47cd4610e.jpg'
      },
      {
        title: 'Mango Kulfi',
        price: '$7.99',
        desc: 'Mango flavored kulfi made with milk and sugar.',
        img: 'https://i.pinimg.com/736x/cb/be/bd/cbbebdc6b1f38b49cac5c7c20c782c1c.jpg'
      }
    ]
  },
  {
    id: 'drinks',
    title: 'Drinks',
    items: [
      {
        title: 'Soft Drinks',
        price: '$2.99',
        desc: 'Coke, Diet Coke, Sprite, Fanta, Limca.',
        img: 'https://i.pinimg.com/736x/6d/61/19/6d611991c28481f836307d84206aa5d0.jpg'
      },
      {
        title: 'Falooda Drink',
        price: '$8.99',
        desc: 'Sweet creamy rose milk beverage with vermicelli and basil seeds.',
        img: 'https://i.pinimg.com/736x/71/36/d5/7136d5c57874167bebf59427f0ac7d21.jpg'
      },
      {
        title: 'Royal Rose Milk',
        price: '$5.99',
        desc: 'Refreshing creamy pink milk blended with rose syrup.',
        img: 'https://i.pinimg.com/736x/43/b5/bc/43b5bc95511bf8a1ba228d37ec231686.jpg'
      },
      {
        title: 'Beers',
        price: '$5.99',
        desc: 'Corona, Modelo Especial, Modelo Negra, Stella Artois, 805, Taj Mahal.',
        img: 'https://i.pinimg.com/736x/5a/22/ca/5a22ca7a69b0ccadee603457a10d1708.jpg'
      },
      {
        title: 'Bottle Water',
        price: '$1.99',
        desc: 'Chilled premium bottled spring water.',
        img: 'https://i.pinimg.com/736x/87/9d/23/879d2335e89ca81de4a04f488e04f179.jpg'
      },
      {
        title: 'Coffee',
        price: '$3.99',
        desc: 'Beverage made from roasted coffee beans.',
        img: 'https://i.pinimg.com/736x/f0/65/5f/f0655f2737da76be9b4ac435c65e3d9b.jpg'
      },
      {
        title: 'Chai',
        price: '$3.99',
        desc: 'Punjabi style aromatic spiced tea.',
        img: 'https://i.pinimg.com/736x/23/e9/7b/23e97b4bac11794504dad59452d738b2.jpg'
      },
      {
        title: 'Aam Panna',
        price: '$3.99',
        desc: 'Drink made from raw mangoes.',
        img: 'https://i.pinimg.com/736x/99/70/b1/9970b1b75e57766cae290ba9c3bb2edf.jpg'
      },
      {
        title: 'Jal Jeera',
        price: '$3.99',
        desc: 'Indian beverage flavored with jal jeera spices.',
        img: 'https://i.pinimg.com/736x/88/d5/25/88d5254b883caa7fa205d26ebacbd4e9.jpg'
      },
      {
        title: 'Mango Lassi',
        price: '$5.99',
        desc: 'Indian yogurt drink made with ripe mangoes and cardamom.',
        img: 'https://i.pinimg.com/1200x/38/9f/f7/389ff7859d55b7de177975c1080fe3e0.jpg'
      },
      {
        title: 'Salted Lassi',
        price: '$3.99',
        desc: 'Savory yogurt drink made with salt and spices.',
        img: 'https://i.pinimg.com/736x/4b/57/b5/4b57b5c16c7bbdde2ae905067fbad2d5.jpg'
      },
      {
        title: 'Sweet Lassi',
        price: '$3.99',
        desc: 'Smooth yogurt drink sweetened with sugar.',
        img: 'https://i.pinimg.com/736x/4e/98/6b/4e986bc30b7f037d12c74e29decd8c48.jpg'
      }
    ]
  }
];
