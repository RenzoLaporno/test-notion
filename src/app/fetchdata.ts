export const fetchN = async () => {
    const res = await fetch("http://localhost:3000/api/notion");
    const data = await res.json();
    return data;
  };
  
  export const page = async () => {
    const res = await fetch(
      "http://localhost:3000/api/hello"
    );
    const data = await res.json();
    
    return data;
  };