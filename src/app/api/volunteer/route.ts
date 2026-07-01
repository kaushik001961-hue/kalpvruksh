import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      gender,
      dob,

      address,
      city,
      state,
      country,
      pincode,

      occupation,
      organization,
      education,

      interest,
      skills,
      languages,
      availability,

      emergencyName,
      emergencyPhone,

      message,
    } = body;

    // Required fields validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !city ||
      !interest
    ) {
      return NextResponse.json(
        {
          error: "Please fill in all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // Check duplicate email
    const existingVolunteer = await prisma.volunteer.findUnique({
      where: {
        email,
      },
    });

    if (existingVolunteer) {
      return NextResponse.json(
        {
          error:
            "A volunteer with this email already exists.",
        },
        {
          status: 409,
        }
      );
    }

    const volunteer = await prisma.volunteer.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        gender: gender || null,
        dob: dob ? new Date(dob) : null,

        address: address || null,
        city,
        state: state || null,
        country: country || "India",
        pincode: pincode || null,

        occupation: occupation || null,
        organization: organization || null,
        education: education || null,

        interest,
        skills: skills || null,
        languages: languages || null,
        availability: availability || null,

        emergencyName: emergencyName || null,
        emergencyPhone: emergencyPhone || null,

        message: message || null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        volunteer,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Volunteer Registration Error:", error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}