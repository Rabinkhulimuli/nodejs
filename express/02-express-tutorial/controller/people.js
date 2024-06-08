const getPeople=(req, res) => {
    res.status(200).json({ success: true, data: people });
  }
  const createPerson=(req, res) => {
      
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ success: false, msg: 'Please provide your name' });
    }
  
    return res.status(201).json({ success: true, person: name });
  }
  const createPersonPostman=(req, res) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ success: false, msg: 'Please provide a name value' });
    } else 
          return res.status(201).json({ success: true, data: [...people ,name]});
  }
  const updatePeople=(req,res)=> {
    const {id}= req.params
    const {name}= req.body
    const person= people.find((one)=> one.id===Number(id))
    if(!person){
        return res.status(404).json({success:false,msg:"the id wasnot found"})
    }else {
        people= people.map((one)=> {
            if(one.id===Number(id)){
                one.name=name;
            }
            return one;
        })
    }
    return res.status(200).json({success:true,data:people})
}
const deletePerson=(req,res)=> {
    console.log(req.params.id)
    const person= people.find((one)=> one.id===Number(req.params.id))
    if(!person){
      return res.status(404).json({success:false,msg:`No such perosn exist with id ${req.params.id}`})
    }
    const newPeople= people.filter((one)=> one.id != Number(req.params.id))
    return res.status(200).json({success:true,data:newPeople})
  }
  module.exports={
    getPeople,
    createPerson,
    createPersonPostman,
    updatePeople,
    deletePerson
  }