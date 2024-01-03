-- CreateTable
CREATE TABLE "imoveis" (
    "city" VARCHAR(255),
    "area" INTEGER,
    "rooms" INTEGER,
    "bathroom" INTEGER,
    "parking_spaces" INTEGER,
    "floor" VARCHAR(255),
    "animal" VARCHAR(255),
    "furniture" VARCHAR(255),
    "hoa" INTEGER,
    "rent_amount" INTEGER,
    "property_tax" INTEGER,
    "fire_insurance" INTEGER,
    "total" INTEGER,
    "id" SERIAL NOT NULL,

    CONSTRAINT "imoveis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "imoveis_id_key" ON "imoveis"("id");
