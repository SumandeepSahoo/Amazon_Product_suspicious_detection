from ml_model import predict

test_samples = [
    {
        "title": "Apple AirPods Pro",
        "description": "Active noise cancellation, original Apple product with warranty.",
        "category": "Electronics",
        "price": 19990,
        "msrp": 24900,
        "price_anomaly_z": 0.12,
        "clip_image_text_sim": 0.91
    },
    {
        "title": "Gucci Women's Luxury Leather Handbag",
        "description": "Imported leather bag for women. No brand authentication provided.",
        "category": "Fashion",
        "price": 899,
        "msrp": 82000,
        "price_anomaly_z": -4.8,
        "clip_image_text_sim": 0.12
    },
    {
        "title": "Samsung 65-inch Crystal 4K UHD Smart TV",
        "description": "2023 model, genuine Samsung product, 1-year warranty.",
        "category": "Electronics",
        "price": 62999,
        "msrp": 78990,
        "price_anomaly_z": -0.5,
        "clip_image_text_sim": 0.88
    },
    {
        "title": "Apple iPhone 15 Pro Max",
        "description": "Brand new iPhone. Cheapest price online.",
        "category": "Electronics",
        "price": 1299,
        "msrp": 159900,
        "price_anomaly_z": -9.5,
        "clip_image_text_sim": 0.21
    },
    {
        "title": "L’Oréal Paris Revitalift Anti-Ageing Cream",
        "description": "Official L'Oréal skin cream for women.",
        "category": "Beauty",
        "price": 799,
        "msrp": 999,
        "price_anomaly_z": -0.15,
        "clip_image_text_sim": 0.72
    },
    {
        "title": "Dior Sauvage Eau de Parfum for Men",
        "description": "Premium perfume at the best price. Imported.",
        "category": "Beauty",
        "price": 599,
        "msrp": 9500,
        "price_anomaly_z": -4.1,
        "clip_image_text_sim": 0.19
    },
    {
        "title": "Nike Air Zoom Pegasus 40 Running Shoes",
        "description": "Original Nike running shoes for athletes.",
        "category": "Footwear",
        "price": 8895,
        "msrp": 10499,
        "price_anomaly_z": -0.41,
        "clip_image_text_sim": 0.83
    },
    {
        "title": "Adidas Ultraboost 22 Shoes",
        "description": "Top-quality imported shoes for men.",
        "category": "Footwear",
        "price": 699,
        "msrp": 18999,
        "price_anomaly_z": -3.9,
        "clip_image_text_sim": 0.27
    },
    {
        "title": "Rolex Submariner Stainless Steel Watch",
        "description": "Luxury watch for men. Premium build.",
        "category": "Accessories",
        "price": 1499,
        "msrp": 785000,
        "price_anomaly_z": -8.1,
        "clip_image_text_sim": 0.16
    },
    {
        "title": "Philips OneBlade Hybrid Trimmer",
        "description": "Original Philips product with fast charging.",
        "category": "Electronics",
        "price": 1999,
        "msrp": 2399,
        "price_anomaly_z": -0.22,
        "clip_image_text_sim": 0.87
    }
]

for i, sample in enumerate(test_samples, start=1):
    print(f"\nSample {i}: {sample['title']}")
    print(predict(sample))
