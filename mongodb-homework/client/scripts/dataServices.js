

const baseURL = "http://localhost:5000/faculty"; 

const getAllUser = async () => {
  try {
    const response = await fetch(baseURL); 
    if (!response.ok) throw new Error("Failed to fetch faculty members");
    return await response.json();
  } catch (error) {
    console.error("Error fetching faculty members:", error);
  }
};

const createUser = async (userData) => {
  try {
    const response = await fetch(baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error("Failed to create a new faculty member");
    return { res: await response.json() };
  } catch (error) {
    return { error: error.message };
  }
};


const deleteUser = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error("Failed to delete faculty member");
    return { res: await response.json() };
  } catch (error) {
    return { error: error.message };
  }
};


export { getAllUser, deleteUser, createUser };
