import Head from 'next/head'
import React from 'react'
import { useState } from 'react'
import { useMount } from 'react-use'
import { unleash } from '~+/Unleash/init'

function Scripts() {
  const [isGravitecEnabled, setIsGravitecEnabled] = useState()

  useMount(() => {
    setIsGravitecEnabled(unleash.isEnabled('publicweb.gravitec'))
  })

  return (
    <>
      <>
        {isGravitecEnabled && (
          <Head>
            <script
              src="https://cdn.gravitec.net/storage/97c2b290a224d969a88683a26b983f88/client.js"
              async
            />
          </Head>
        )}
      </>
    </>
  )
}

export default Scripts
