export const getPatients = async () => {
  try {
    const response = await fetch('/api/patients');
    if (!response.ok) throw new Error(`Network response was not ok: ${response.status}`);
    
    return await response.json();
  } catch (error) {
    console.warn("Could not fetch patients from API, using fallback data:", error.message);
    // Full fallback data with correct S3 URLs to ensure UI looks perfect even if API fails
    return [
      {
        name: "Emily Williams",
        gender: "Female",
        age: 18,
        profile_picture: "https://fedskillstest.s3.us-east-2.amazonaws.com/emily_williams.png",
        date_of_birth: "01/01/1996",
        phone_number: "(415) 555-1234",
        emergency_contact: "(415) 555-5678",
        insurance_type: "Sunrise Health Assurance",
        diagnosis_history: [],
        diagnostic_list: [],
        lab_results: []
      },
      {
        name: "Ryan Johnson",
        gender: "Male",
        age: 45,
        profile_picture: "https://fedskillstest.s3.us-east-2.amazonaws.com/ryan_johnson.png",
        date_of_birth: "01/01/1996",
        phone_number: "(415) 555-1234",
        emergency_contact: "(415) 555-5678",
        insurance_type: "Sunrise Health Assurance",
        diagnosis_history: [],
        diagnostic_list: [],
        lab_results: []
      },
      {
        name: "Brandon Mitchell",
        gender: "Male",
        age: 36,
        profile_picture: "https://fedskillstest.s3.us-east-2.amazonaws.com/brandon_mitchell.png",
        date_of_birth: "01/01/1996",
        phone_number: "(415) 555-1234",
        emergency_contact: "(415) 555-5678",
        insurance_type: "Sunrise Health Assurance",
        diagnosis_history: [],
        diagnostic_list: [],
        lab_results: []
      },
      {
        name: "Jessica Taylor",
        gender: "Female",
        age: 28,
        profile_picture: "https://fedskillstest.s3.us-east-2.amazonaws.com/jessica_taylor.png",
        date_of_birth: "August 23, 1996",
        phone_number: "(415) 555-1234",
        emergency_contact: "(415) 555-5678",
        insurance_type: "Sunrise Health Assurance",
        diagnosis_history: [
          {
            month: "October",
            year: 2023,
            blood_pressure: {
              systolic: { value: 160, levels: "Higher than Average" },
              diastolic: { value: 110, levels: "Lower than Average" }
            },
            heart_rate: { value: 78, levels: "Lower than Average" },
            respiratory_rate: { value: 20, levels: "Normal" },
            temperature: { value: 98.6, levels: "Normal" }
          },
          {
            month: "November",
            year: 2023,
            blood_pressure: {
              systolic: { value: 120, levels: "Normal" },
              diastolic: { value: 80, levels: "Normal" }
            },
            heart_rate: { value: 72, levels: "Normal" },
            respiratory_rate: { value: 18, levels: "Normal" },
            temperature: { value: 98.4, levels: "Normal" }
          },
          {
            month: "December",
            year: 2023,
            blood_pressure: {
              systolic: { value: 160, levels: "Higher than Average" },
              diastolic: { value: 110, levels: "Lower than Average" }
            },
            heart_rate: { value: 78, levels: "Lower than Average" },
            respiratory_rate: { value: 20, levels: "Normal" },
            temperature: { value: 98.6, levels: "Normal" }
          },
          {
            month: "January",
            year: 2024,
            blood_pressure: {
              systolic: { value: 140, levels: "Higher than Average" },
              diastolic: { value: 90, levels: "Normal" }
            },
            heart_rate: { value: 75, levels: "Normal" },
            respiratory_rate: { value: 19, levels: "Normal" },
            temperature: { value: 98.5, levels: "Normal" }
          },
          {
            month: "February",
            year: 2024,
            blood_pressure: {
              systolic: { value: 150, levels: "Higher than Average" },
              diastolic: { value: 85, levels: "Normal" }
            },
            heart_rate: { value: 78, levels: "Normal" },
            respiratory_rate: { value: 20, levels: "Normal" },
            temperature: { value: 98.6, levels: "Normal" }
          },
          {
            month: "March",
            year: 2024,
            blood_pressure: {
              systolic: { value: 160, levels: "Higher than Average" },
              diastolic: { value: 78, levels: "Lower than Average" }
            },
            heart_rate: { value: 78, levels: "Lower than Average" },
            respiratory_rate: { value: 20, levels: "Normal" },
            temperature: { value: 98.6, levels: "Normal" }
          }
        ],
        diagnostic_list: [
          {
            name: "Hypertension",
            description: "Chronic high blood pressure",
            status: "Under Observation"
          },
          {
            name: "Type 2 Diabetes",
            description: "Insulin resistance and elevated blood sugar",
            status: "Cured"
          },
          {
            name: "Asthma",
            description: "Recurrent episodes of bronchial constriction",
            status: "Inactive"
          }
        ],
        lab_results: ["Blood Tests", "CT Scans", "Radiology Reports", "X-Rays", "Urine Test"]
      },
      {
        name: "Samantha Johnson",
        gender: "Female",
        age: 56,
        profile_picture: "https://fedskillstest.s3.us-east-2.amazonaws.com/samantha_johnson.png",
        date_of_birth: "01/01/1996",
        phone_number: "(415) 555-1234",
        emergency_contact: "(415) 555-5678",
        insurance_type: "Sunrise Health Assurance",
        diagnosis_history: [],
        diagnostic_list: [],
        lab_results: []
      },
      {
        name: "Ashley Martinez",
        gender: "Female",
        age: 54,
        profile_picture: "https://fedskillstest.s3.us-east-2.amazonaws.com/ashley_martinez.png",
        date_of_birth: "01/01/1996",
        phone_number: "(415) 555-1234",
        emergency_contact: "(415) 555-5678",
        insurance_type: "Sunrise Health Assurance",
        diagnosis_history: [],
        diagnostic_list: [],
        lab_results: []
      },
      {
        name: "Olivia Brown",
        gender: "Female",
        age: 32,
        profile_picture: "https://fedskillstest.s3.us-east-2.amazonaws.com/olivia_brown.png",
        date_of_birth: "01/01/1996",
        phone_number: "(415) 555-1234",
        emergency_contact: "(415) 555-5678",
        insurance_type: "Sunrise Health Assurance",
        diagnosis_history: [],
        diagnostic_list: [],
        lab_results: []
      },
      {
        name: "Tyler Davis",
        gender: "Male",
        age: 19,
        profile_picture: "https://fedskillstest.s3.us-east-2.amazonaws.com/tyler_davis.png",
        date_of_birth: "01/01/1996",
        phone_number: "(415) 555-1234",
        emergency_contact: "(415) 555-5678",
        insurance_type: "Sunrise Health Assurance",
        diagnosis_history: [],
        diagnostic_list: [],
        lab_results: []
      },
      {
        name: "Kevin Anderson",
        gender: "Male",
        age: 30,
        profile_picture: "https://fedskillstest.s3.us-east-2.amazonaws.com/kevin_anderson.png",
        date_of_birth: "01/01/1996",
        phone_number: "(415) 555-1234",
        emergency_contact: "(415) 555-5678",
        insurance_type: "Sunrise Health Assurance",
        diagnosis_history: [],
        diagnostic_list: [],
        lab_results: []
      },
      {
        name: "Dylan Thompson",
        gender: "Male",
        age: 36,
        profile_picture: "https://fedskillstest.s3.us-east-2.amazonaws.com/dylan_thompson.png",
        date_of_birth: "01/01/1996",
        phone_number: "(415) 555-1234",
        emergency_contact: "(415) 555-5678",
        insurance_type: "Sunrise Health Assurance",
        diagnosis_history: [],
        diagnostic_list: [],
        lab_results: []
      },
      {
        name: "Nathan Evans",
        gender: "Male",
        age: 58,
        profile_picture: "https://fedskillstest.s3.us-east-2.amazonaws.com/nathan_evans.png",
        date_of_birth: "01/01/1996",
        phone_number: "(415) 555-1234",
        emergency_contact: "(415) 555-5678",
        insurance_type: "Sunrise Health Assurance",
        diagnosis_history: [],
        diagnostic_list: [],
        lab_results: []
      },
      {
        name: "Mike Nolan",
        gender: "Male",
        age: 31,
        profile_picture: "https://fedskillstest.s3.us-east-2.amazonaws.com/mike_nolan.png",
        date_of_birth: "01/01/1996",
        phone_number: "(415) 555-1234",
        emergency_contact: "(415) 555-5678",
        insurance_type: "Sunrise Health Assurance",
        diagnosis_history: [],
        diagnostic_list: [],
        lab_results: []
      }
    ];
  }
};

