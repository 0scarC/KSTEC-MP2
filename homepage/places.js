const exerciseSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
    reps: { type: Date, required: true },
    workout:  { type: Date, required: true },
    weight: { type: Date, required: true },
    MuscleArea: { type: Date, required: true },
  }, {
    timestamps: true,
  });
  

