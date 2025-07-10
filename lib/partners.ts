export interface Partner {
  id: number
  name: string
  category: string
  logo: string
  description: string
  partnership: string
  website?: string
  established: string
}

export const partners: Partner[] = [
  {
    id: 1,
    name: "Grand Valley Hotel",
    category: "Hospitality",
    logo: "/images/partners/grand-hotel.png",
    description: "Luxury hotel chain serving farm-to-table cuisine in their restaurants.",
    partnership: "Exclusive supplier of organic vegetables and herbs for all restaurant locations.",
    website: "grandvalleyhotel.com",
    established: "2021",
  },
  {
    id: 2,
    name: "Marriott Hotels",
    category: "Hospitality",
    logo: "/images/partners/marriott.png",
    description: "International hotel chain committed to sustainable dining experiences.",
    partnership: "Primary supplier of fresh produce for 15+ locations in the region.",
    website: "marriott.com",
    established: "2022",
  },
  {
    id: 3,
    name: "Hilton Garden Inn",
    category: "Hospitality",
    logo: "/images/partners/hilton.png",
    description: "Premium hotel brand focusing on fresh, local ingredients.",
    partnership: "Seasonal supplier of fruits and vegetables for breakfast and catering services.",
    website: "hilton.com",
    established: "2023",
  },
  {
    id: 4,
    name: "Green Leaf Restaurant Group",
    category: "Food Service",
    logo: "/images/partners/restaurant-group.png",
    description: "Award-winning restaurant group with 8 locations specializing in farm-fresh cuisine.",
    partnership: "Daily delivery of seasonal produce and specialty herbs.",
    website: "greenleafrestaurants.com",
    established: "2020",
  },
  {
    id: 5,
    name: "Fresh Foods Manufacturing",
    category: "Food Processing",
    logo: "/images/partners/food-factory.png",
    description: "Leading food processing company creating healthy, organic food products.",
    partnership: "Bulk supplier of grains, vegetables, and fruits for processing operations.",
    website: "freshfoodsmanufacturing.com",
    established: "2021",
  },
  {
    id: 6,
    name: "Organic Valley Co-op",
    category: "Retail",
    logo: "/images/partners/organic-foods.png",
    description: "Cooperative of organic food stores committed to supporting local farmers.",
    partnership: "Wholesale distributor for 25+ retail locations across the state.",
    website: "organicvalleycoop.com",
    established: "2019",
  },
  {
    id: 7,
    name: "Valley School District",
    category: "Education",
    logo: "/images/partners/school-district.png",
    description: "Progressive school district serving healthy, locally-sourced meals to students.",
    partnership: "Primary supplier for school lunch programs serving 10,000+ students daily.",
    website: "valleyschools.edu",
    established: "2022",
  },
  {
    id: 8,
    name: "Regional Healthcare System",
    category: "Healthcare",
    logo: "/images/partners/healthcare-system.png",
    description: "Healthcare network focused on nutrition and wellness for patients and staff.",
    partnership: "Supplier of fresh produce for hospital cafeterias and patient meal programs.",
    website: "regionalhealthcare.org",
    established: "2023",
  },
]

export const partnerCategories = [
  "All",
  "Hospitality",
  "Food Service",
  "Food Processing",
  "Retail",
  "Education",
  "Healthcare",
]
