// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req.method); //POST
  console.log(req.body); //{ NIS: '11223', displayName: 'admin', password: '123456'}
  // APP POST
  if (req.method === 'POST') {
    // Jalankan
    res.status(200).json({ message: 'Hello' + req.body.displayName })
  } else {
    res.status(404).json({ error: true, message: 'method tidak dijalankan'})
  }
}
